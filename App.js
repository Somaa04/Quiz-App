import { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { questions } from "./Data/questions";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFnished, setIsFnished] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const { width, height } = useWindowSize();

  const handleAnswer = (option) => {
    if (feedback) return; 

    setSelectedAnswer(option);
    setFeedback(true);

    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback(false);
    } else {
      setIsFnished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setFeedback(false);
    setIsFnished(false);
  };

  const calculateProgress = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  return (
    <div className="min-h-screen bg-sky-900 text-white flex flex-col items-center justify-center px-4">
      {isFnished && <Confetti width={width} height={height} />}
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-orange-600 mb-1">Quiz With Me</h1>
        <p className="text-gray-400">Put your knowledge to the test and track your progress as you learn</p>
      </div>

      {!isFnished ? (
        <>
         

          {/* Progress Bar */}
          <div className="w-full max-w-xl bg-gray-700 rounded-full h-4 mb-2 mt-[-15px] overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-500 to-emerald-500 h-4 transition-all duration-500 ease-in-out"
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            {Math.round(calculateProgress())}% Completed
          </p>

          <QuestionCard
            selected={selectedAnswer}
            showFeedback={feedback}
            onAnswer={handleAnswer}
            data={questions[currentQuestion]}
            current={currentQuestion}
            total={questions.length}
          />

          <div>
            {feedback && (
              <button
                onClick={goToNext}
                className=" text-xl px-5  mt-1 bg-gradient-to-r from-orange-600 to-sky-800 rounded-[500px] hover:scale-[1.05] transition-all duration-300"
              >
                {currentQuestion + 1 < questions.length
                  ? "Continue"
                  : "See Results"}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center text-center">
          <h1 className="font-bold text-5xl text-red-800">QUIZ IS OVER 😉</h1>
          <p className="mt-4 text-green-600 text-xl">
            Your Score: {score} out of {questions.length}
          </p>
          <button
            onClick={restartQuiz}
            className="mt-6 mx-auto font-medium bg-orange-600 px-6 py-2 rounded-xl hover:scale-[1.08] transition-all duration-300"
          >
            Quiz Again
          </button>
        </div>
      )}
    </div>
  );
}
