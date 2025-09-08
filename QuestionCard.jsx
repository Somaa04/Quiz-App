import { motion } from "framer-motion";

export default function QuestionCard({
  data,
  onAnswer,
  showFeedback,
  selected,
  current,
  total,
}) {
  const { question, options, answer } = data;

  const getButtonStyle = (option) => {
    if (!showFeedback) {
      return "bg-indigo-600 hover:bg-indigo-500/80";
    }
    if (option === answer) {
      return "bg-emerald-600";
    }
    if (option === selected) {
      return "bg-rose-600";
    }
    return "bg-stone-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-xl w-full max-w-xl border border-white/20"
    >
      <div>
        <h1 className="font-medium mb-1 text-gray-300">
          Question {current + 1} of {total}
        </h1>
      </div>
      <p className="font-serif text-xl mb-4">{question}</p>
      <div className="grid gap-3">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option)}
            disabled={showFeedback}
            className={`${getButtonStyle(option)} 
                        text-left px-4 py-3 rounded-lg text-white font-bold font-serif 
                        transition-all duration-300 hover:scale-[1.03] hover:shadow-md`}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
