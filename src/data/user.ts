'use client';

export interface User {
  id: string;
  name: string;
  createdAt: string;
}

export interface QuizScore {
  userId: string;
  level: 'easy' | 'middle' | 'next-level';
  score: number;
  total: number;
  date: string;
}

const STORAGE_KEY = 'python_quiz_users';
const CURRENT_USER_KEY = 'python_quiz_current_user';
const SCORES_KEY = 'python_quiz_scores';

export function generateUserId(): string {
  return 'user_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
}

export function getAllUsers(): User[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function getUserById(id: string): User | undefined {
  const users = getAllUsers();
  return users.find(u => u.id === id);
}

export function createUser(name: string): User {
  const users = getAllUsers();
  const newUser: User = {
    id: generateUserId(),
    name: name.trim(),
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  localStorage.setItem(CURRENT_USER_KEY, newUser.id);
  return newUser;
}

export function setCurrentUser(userId: string): void {
  localStorage.setItem(CURRENT_USER_KEY, userId);
}

export function getCurrentUser(): User | undefined {
  if (typeof window === 'undefined') return undefined;
  const userId = localStorage.getItem(CURRENT_USER_KEY);
  if (!userId) return undefined;
  return getUserById(userId);
}

export function updateUserName(userId: string, newName: string): User | undefined {
  const users = getAllUsers();
  const index = users.findIndex(u => u.id === userId);
  if (index === -1) return undefined;
  
  users[index].name = newName.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return users[index];
}

export function deleteUser(userId: string): boolean {
  const users = getAllUsers();
  const filtered = users.filter(u => u.id !== userId);
  if (filtered.length === users.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  
  const currentUser = localStorage.getItem(CURRENT_USER_KEY);
  if (currentUser === userId) {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
  return true;
}

// Score functions
export function getUserScores(): QuizScore[] {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(SCORES_KEY);
  return data ? JSON.parse(data) : [];
}

export function getScoresByUserId(userId: string): QuizScore[] {
  return getUserScores().filter(s => s.userId === userId);
}

export function saveScore(level: QuizScore['level'], score: number, total: number): void {
  const user = getCurrentUser();
  if (!user) return;

  const scores = getUserScores();
  scores.push({
    userId: user.id,
    level,
    score,
    total,
    date: new Date().toISOString(),
  });

  localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
}

export function getBestScore(userId: string, level: QuizScore['level']): number {
  const scores = getScoresByUserId(userId).filter(s => s.level === level);
  if (scores.length === 0) return -1;
  return Math.max(...scores.map(s => s.score));
}

export function getTotalAttempts(userId: string, level: QuizScore['level']): number {
  return getScoresByUserId(userId).filter(s => s.level === level).length;
}