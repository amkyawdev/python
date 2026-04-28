'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { createUser, getCurrentUser, type User } from '@/data/user';

export default function UserPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [existingUser, setExistingUser] = useState<User | null>(null);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setExistingUser(user);
      setName(user.name);
      setIsNewUser(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (isNewUser) {
      const newUser = createUser(name);
      setExistingUser(newUser);
    }
    
    router.push('/level');
  };

  const handleContinue = () => {
    router.push('/level');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="text-center mb-6"
          >
            <i className="bi bi-person-circle text-6xl text-baby-blue"></i>
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
              {isNewUser ? 'Create Profile' : 'Welcome Back'}
            </h1>
          </motion.div>

          {existingUser && !isNewUser ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center mb-6">
                <div className="bg-light rounded p-3 mb-3">
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-xl font-semibold text-gray-800">{existingUser.name}</p>
                </div>
                <div className="bg-light rounded p-3">
                  <p className="text-sm text-gray-500">User ID</p>
                  <p className="text-lg font-mono text-gray-700">{existingUser.id}</p>
                </div>
              </div>
              <button
                onClick={handleContinue}
                className="w-full btn btn-primary btn-lg btn-press"
              >
                <i className="bi bi-play-fill me-2"></i>
                Continue to Level
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label">Enter Your Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Your name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary btn-lg btn-press"
                disabled={!name.trim()}
              >
                <i className="bi bi-check-lg me-2"></i>
                Start Quiz
              </button>
            </form>
          )}

          <div className="mt-4 text-center">
            <button
              onClick={() => router.push('/')}
              className="btn btn-link text-decoration-none"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Home
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}