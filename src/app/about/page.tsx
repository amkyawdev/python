'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getCurrentUser, type User, getUserScores, getBestScore, getTotalAttempts, type QuizScore } from '@/data/user';

type Level = 'easy' | 'middle' | 'next-level';

function getUserLevel(scores: QuizScore[]): string {
  if (scores.length === 0) return 'Beginner';
  
  const totalScore = scores.reduce((sum, s) => sum + (s.score / s.total) * 100, 0);
  const avgPercent = totalScore / scores.length;
  
  if (avgPercent >= 90) return 'Python Master';
  if (avgPercent >= 70) return 'Advanced';
  if (avgPercent >= 50) return 'Intermediate';
  return 'Beginner';
}

function getLevelBadge(level: string): { color: string; icon: string } {
  switch (level) {
    case 'Python Master':
      return { color: 'bg-warning', icon: 'bi-trophy-fill' };
    case 'Advanced':
      return { color: 'bg-success', icon: 'bi-star-fill' };
    case 'Intermediate':
      return { color: 'bg-info', icon: 'bi-award-fill' };
    default:
      return { color: 'bg-secondary', icon: 'bi-egg-fill' };
  }
}

export default function AboutPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [scores, setScores] = useState<QuizScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push('/user');
      return;
    }
    
    setUser(currentUser);
    const userScores = getUserScores().filter(s => s.userId === currentUser.id);
    setScores(userScores);
    setIsLoading(false);
  }, [router]);

  if (isLoading || !user) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
  }

  const userLevel = getUserLevel(scores);
  const badge = getLevelBadge(userLevel);

  const levelStats = [
    { level: 'easy' as Level, name: 'Easy', color: '#B8D4E3' },
    { level: 'middle' as Level, name: 'Middle', color: '#94A3B8' },
    { level: 'next-level' as Level, name: 'Next Level', color: '#6B7280' },
  ];

  return (
    <main className="min-h-screen p-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="row justify-content-center"
        >
          {/* User Profile Card */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-lg h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-person-circle text-primary" style={{ fontSize: '4rem' }}></i>
                </div>
                <h2 className="card-title fw-bold">{user.name}</h2>
                <p className="text-muted small">{user.id}</p>
                
                <div className={`badge ${badge.color} fs-6 mb-3`}>
                  <i className={`bi ${badge.icon} me-1`}></i>
                  {userLevel}
                </div>
                
                <div className="border-top border-bottom py-3 my-3">
                  <div className="row">
                    <div className="col-6">
                      <p className="text-muted mb-0 small">Total Quizzes</p>
                      <p className="fs-4 fw-bold">{scores.length}</p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted mb-0 small">Total Score</p>
                      <p className="fs-4 fw-bold">
                        {scores.reduce((sum, s) => sum + s.score, 0)}/{scores.reduce((sum, s) => sum + s.total, 0)}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="d-grid gap-2">
                  <button
                    onClick={() => router.push('/level')}
                    className="btn btn-primary btn-lg"
                  >
                    <i className="bi bi-play-fill me-2"></i>
                    Play Quiz
                  </button>
                  <button
                    onClick={() => router.push('/')}
                    className="btn btn-outline-secondary"
                  >
                    <i className="bi bi-house-door me-2"></i>
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scores Card */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow-lg h-100">
              <div className="card-header bg-white">
                <h5 className="mb-0">
                  <i className="bi bi-bar-chart-fill me-2"></i>
                  My Scores
                </h5>
              </div>
              <div className="card-body">
                {scores.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="bi bi-emoji-expressionless text-muted" style={{ fontSize: '3rem' }}></i>
                    <p className="mt-3 text-muted">No quizzes taken yet</p>
                    <button
                      onClick={() => router.push('/level')}
                      className="btn btn-primary"
                    >
                      <i className="bi bi-play-fill me-2"></i>
                      Start Quiz
                    </button>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Level</th>
                          <th>Best Score</th>
                          <th>Attempts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {levelStats.map((stat) => {
                          const bestScore = getBestScore(user.id, stat.level);
                          const attempts = getTotalAttempts(user.id, stat.level);
                          return (
                            <tr key={stat.level}>
                              <td>
                                <span 
                                  className="badge" 
                                  style={{ backgroundColor: stat.color }}
                                >
                                  {stat.name}
                                </span>
                              </td>
                              <td>
                                {bestScore >= 0 ? (
                                  <span className="fw-bold">{bestScore}/5</span>
                                ) : (
                                  <span className="text-muted">-</span>
                                )}
                              </td>
                              <td>{attempts}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              
              {/* Recent Scores */}
              {scores.length > 0 && (
                <div className="card-footer bg-white">
                  <h6 className="mb-2">
                    <i className="bi bi-clock-history me-2"></i>
                    Recent Results
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {scores.slice(-5).reverse().map((score, index) => (
                      <span 
                        key={index} 
                        className={`badge ${score.score === score.total ? 'bg-success' : score.score >= score.total / 2 ? 'bg-warning' : 'bg-danger'}`}
                      >
                        {score.level}: {score.score}/{score.total}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}