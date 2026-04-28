'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ThreeButton from '@/components/ThreeButton';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Python Quiz
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Test your Python knowledge with interactive quizzes
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
        >
          <ThreeButton 
            text="Start Quiz" 
            onClick={() => router.push('/user')}
            color="#B8D4E3"
            hoverColor="#8BB8CC"
            size="large"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed bottom-4 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <button
          onClick={() => router.push('/docs')}
          className="btn btn-outline-secondary btn-press"
        >
          <i className="bi bi-book me-2"></i>
          Docs
        </button>
        <button
          onClick={() => router.push('/about')}
          className="btn btn-outline-secondary btn-press"
        >
          <i className="bi bi-person-circle me-2"></i>
          About
        </button>
      </motion.div>
    </main>
  );
}