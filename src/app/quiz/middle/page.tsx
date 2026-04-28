'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeButton from '@/components/ThreeButton';
import { useSound } from '@/hooks/useSound';
import { middleQuestions, type Question } from '@/data/middle';
import { saveScore } from '@/data/user';

export default function MiddleQuizPage() {
  const router = useRouter();
  const { playSound } = useSound();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question: Question = middleQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === question.correctAnswer) {
      setScore(score + 1);
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const handleNext = () => {
    if (currentQuestion < middleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      saveScore('middle', score, middleQuestions.length);
    }
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index 
        ? 'bg-gray-600 text-white' 
        : 'bg-white hover:bg-gray-100 text-gray-700';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-green-500 text-white';
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'bg-red-500 text-white';
    }
    
    return 'bg-gray-200 text-gray-500';
  };

  if (quizComplete) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
          <p className="text-xl text-gray-600 mb-2">Your Score:</p>
          <p className="text-5xl font-bold text-gray-600 mb-4">
            {score} / {middleQuestions.length}
          </p>
          <p className="text-gray-500 mb-6">
            {score === middleQuestions.length 
              ? 'Perfect score! Great job!' 
              : score >= middleQuestions.length / 2 
                ? 'Good job! Keep practicing!' 
                : 'Keep learning and try again!'}
          </p>
          <div className="flex gap-4 justify-center">
            <ThreeButton
              text="Try Again"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setQuizComplete(false);
              }}
              color="#94A3B8"
              hoverColor="#64748B"
              size="small"
            />
            <button
              onClick={() => router.push('/level')}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Change Level
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => router.push('/level')}
            className="btn btn-outline-secondary btn-press"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </button>
          <span className="text-gray-600 font-medium">
            Question {currentQuestion + 1} / {middleQuestions.length}
          </span>
        </div>

        <div className="w-full bg-gray-300 rounded-full h-2 mb-6">
          <div 
            className="bg-gray-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / middleQuestions.length) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {question.question}
            </h2>

            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg text-left font-medium transition-all btn-press ${getOptionClass(index)}`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg mb-4 ${
                  selectedAnswer === question.correctAnswer 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                <p className="font-medium">
                  {selectedAnswer === question.correctAnswer 
                    ? '✓ Correct!' 
                    : '✗ Incorrect'}
                </p>
                <p className="text-sm mt-1">{question.explanation}</p>
              </motion.div>
            )}

            {showResult && (
              <div className="flex justify-center">
                <ThreeButton
                  text="Next Question"
                  onClick={handleNext}
                  color="#94A3B8"
                  hoverColor="#64748B"
                  size="medium"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </main>
  );
}