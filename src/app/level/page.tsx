'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ThreeButton from '@/components/ThreeButton';

const levels = [
  {
    id: 'easy',
    title: 'Easy',
    description: 'Basic Python concepts and syntax',
    color: '#B8D4E3',
    hoverColor: '#8BB8CC',
    route: '/quiz/easy',
    icon: 'bi-emoji-smile',
  },
  {
    id: 'middle',
    title: 'Middle',
    description: 'Loops, functions, and list operations',
    color: '#94A3B8',
    hoverColor: '#64748B',
    route: '/quiz/middle',
    icon: 'bi-emoji-neutral',
  },
  {
    id: 'next-level',
    title: 'Next Level',
    description: 'OOP, decorators, and exceptions',
    color: '#6B7280',
    hoverColor: '#4B5563',
    route: '/quiz/next-level',
    icon: 'bi-emoji-frown',
  },
];

export default function LevelPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Choose Your Level
        </h1>
        <p className="text-gray-600">Select a difficulty level to begin</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {levels.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <ThreeButton
              text={level.title}
              onClick={() => router.push(level.route)}
              color={level.color}
              hoverColor={level.hoverColor}
              size="large"
            />
            <p className="text-gray-600 mt-4 text-center text-sm">
              <i className={`bi ${level.icon} me-1`}></i>
              {level.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={() => router.push('/')}
        className="mt-8 btn btn-outline-secondary btn-press"
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back to Home
      </motion.button>
    </main>
  );
}