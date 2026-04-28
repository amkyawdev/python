'use client';

export interface User {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

export interface QuizScore {
  userId: string;
  level: 'easy' | 'middle' | 'next-level';
  score: number;
  total: number;
  date: string;
}

// Bootstrap Icons avatars (using bi-person-circle with different colors)
const AVATAR_COLORS = [
  '#B8D4E3', // Baby Blue
  '#94A3B8', // Gray
  '#8BB8CC', // Baby Blue Dark
  '#6B7280', // Gray Dark
  '#5C7C96', // Navy
  '#7A96A8', // Teal
  '#96A87A', // Green
  '#A8967A', // Orange
  '#7A7AA8', // Purple
  '#A87A96', // Pink
];

const AVATAR_ICONS = [
  'bi-person-circle',
  'bi-person-circle-fill',
  'bi-person-circle',
  'bi-person-circle-fill',
];

export function generateAvatar(): string {
  const colorIndex = Math.floor(Math.random() * AVATAR_COLORS.length);
  return AVATAR_COLORS[colorIndex];
}

export function getAvatarUrl(avatarColor: string): string {
  // Return bootstrap icons class with color styling
  return avatarColor;
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

export function createUser(name: string, avatar?: string): User {
  const users = getAllUsers();
  const userAvatar = avatar || generateAvatar();
  const newUser: User = {
    id: generateUserId(),
    name: name.trim(),
    avatar: userAvatar,
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