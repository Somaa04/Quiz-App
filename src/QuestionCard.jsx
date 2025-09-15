// import { motion } from "framer-motion";

// export default function QuestionCard({
//   data,
//   onAnswer,
//   showFeedback,
//   selected,
//   current,
//   total,
// }) {
//   const { question, options, answer } = data;

//   const getButtonStyle = (option) => {
//     if (!showFeedback) {
//       return "bg-indigo-600 hover:bg-indigo-500/80";
//     }
//     if (option === answer) {
//       return "bg-emerald-600";
//     }
//     if (option === selected) {
//       return "bg-rose-600";
//     }
//     return "bg-stone-500";
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.4 }}
//       className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl w-full max-w-xl border border-white/20"
//     >
//       <div>
//         <h1 className="font-medium mb-1 text-gray-300">
//           Question {current + 1} of {total}
//         </h1>
//       </div>
//       <p className="font-serif text-xl mb-4">{question}</p>
//       <div className="grid gap-3">
//         {options.map((option, i) => (
//           <button
//             key={i}
//             onClick={() => onAnswer(option)}
//             disabled={showFeedback}
//             className={`${getButtonStyle(option)} 
//                         text-left px-4 py-3 rounded-lg text-white font-bold font-serif 
//                         transition-all duration-300 hover:scale-[1.03] hover:shadow-md`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </motion.div>
//   );
// }
// //////////////////////////////
// import { useState } from "react";
// import QuestionCard from "./components/QuestionCard";
// import { questions } from "./Data/questions";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// export default function App() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [isFnished, setIsFnished] = useState(false);
//   const [feedback, setFeedback] = useState(false);

//   const { width, height } = useWindowSize();

//   const handleAnswer = (option) => {
//     if (feedback) return; 

//     setSelectedAnswer(option);
//     setFeedback(true);

//     if (option === questions[currentQuestion].answer) {
//       setScore((prev) => prev + 1);
//     }
//   };

//   const goToNext = () => {
//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(null);
//       setFeedback(false);
//     } else {
//       setIsFnished(true);
//     }
//   };

//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setSelectedAnswer(null);
//     setFeedback(false);
//     setIsFnished(false);
//   };

//   const calculateProgress = () => {
//     return ((currentQuestion + 1) / questions.length) * 100;
//   };

//   return (
//     <div className="min-h-screen bg-sky-900 text-white flex flex-col items-center justify-center px-4">
//       {isFnished && <Confetti width={width} height={height} />}
      
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-orange-600 mb-1">Quiz With Me</h1>
//         <p className="text-gray-400">Put your knowledge to the test and track your progress as you learn</p>
//       </div>

//       {!isFnished ? (
//         <>
         

//           {/* Progress Bar */}
//           <div className="w-full max-w-xl bg-gray-700 rounded-full h-4 mb-2 mt-[-15px] overflow-hidden">
//             <div
//               className="bg-gradient-to-r from-orange-500 to-emerald-500 h-4 transition-all duration-500 ease-in-out"
//               style={{ width: `${calculateProgress()}%` }}
//             ></div>
//           </div>
//           <p className="text-sm text-gray-300 mb-3">
//             {Math.round(calculateProgress())}% Completed
//           </p>

//           <QuestionCard
//             selected={selectedAnswer}
//             showFeedback={feedback}
//             onAnswer={handleAnswer}
//             data={questions[currentQuestion]}
//             current={currentQuestion}
//             total={questions.length}
//           />

//           <div>
//             {feedback && (
//               <button
//                 onClick={goToNext}
//                 className=" text-xl px-5  mt-1 bg-gradient-to-r from-orange-600 to-sky-800 rounded-[500px] hover:scale-[1.05] transition-all duration-300"
//               >
//                 {currentQuestion + 1 < questions.length
//                   ? "Continue"
//                   : "See Results"}
//               </button>
//             )}
//           </div>
//         </>
//       ) : (
//         <div className="flex flex-col justify-center text-center">
//           <h1 className="font-bold text-5xl text-red-800">QUIZ IS OVER 😉</h1>
//           <p className="mt-4 text-green-600 text-xl">
//             Your Score: {score} out of {questions.length}
//           </p>
//           <button
//             onClick={restartQuiz}
//             className="mt-6 mx-auto font-medium bg-orange-600 px-6 py-2 rounded-xl hover:scale-[1.08] transition-all duration-300"
//           >
//             Quiz Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

