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
    id: 'level-1',
    title: 'Level 1',
    description: 'Variables and data types',
    color: '#A8C5DA',
    hoverColor: '#7AA8C0',
    route: '/quiz/easy',
    icon: 'bi-1-circle',
  },
  {
    id: 'level-2',
    title: 'Level 2',
    description: 'Basic operators',
    color: '#98B6D1',
    hoverColor: '#6A9AC8',
    route: '/quiz/easy',
    icon: 'bi-2-circle',
  },
  {
    id: 'level-3',
    title: 'Level 3',
    description: 'String operations',
    color: '#88A7C8',
    hoverColor: '#5A8CB0',
    route: '/quiz/easy',
    icon: 'bi-3-circle',
  },
  {
    id: 'level-4',
    title: 'Level 4',
    description: 'Input and output',
    color: '#7898BF',
    hoverColor: '#4A7EA0',
    route: '/quiz/easy',
    icon: 'bi-4-circle',
  },
  {
    id: 'level-5',
    title: 'Level 5',
    description: 'Conditionals basics',
    color: '#C8D4E3',
    hoverColor: '#98A8CC',
    route: '/quiz/easy',
    icon: 'bi-5-circle',
  },
  {
    id: 'level-6',
    title: 'Level 6',
    description: 'If-else statements',
    color: '#D6E0EB',
    hoverColor: '#A6B0D4',
    route: '/quiz/middle',
    icon: 'bi-6-circle',
  },
  {
    id: 'level-7',
    title: 'Level 7',
    description: 'Comparison operators',
    color: '#94A3B8',
    hoverColor: '#64748B',
    route: '/quiz/middle',
    icon: 'bi-7-circle',
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
    id: 'level-9',
    title: 'Level 9',
    description: 'For loops',
    color: '#6B7280',
    hoverColor: '#4B5563',
    route: '/quiz/middle',
    icon: 'bi-9-circle',
  },
  {
    id: 'level-10',
    title: 'Level 10',
    description: 'While loops',
    color: '#5A6570',
    hoverColor: '#3A4553',
    route: '/quiz/middle',
    icon: 'bi-0-circle',
  },
  {
    id: 'level-11',
    title: 'Level 11',
    description: 'Lists basics',
    color: '#4D5660',
    hoverColor: '#2D3643',
    route: '/quiz/middle',
    icon: 'bi-diagram-3',
  },
  {
    id: 'level-12',
    title: 'Level 12',
    description: 'List operations',
    color: '#404850',
    hoverColor: '#202830',
    route: '/quiz/middle',
    icon: 'bi-diagram-2',
  },
  {
    id: 'level-13',
    title: 'Level 13',
    description: 'Functions',
    color: '#333A40',
    hoverColor: '#131820',
    route: '/quiz/middle',
    icon: 'bi-code-square',
  },
  {
    id: 'level-14',
    title: 'Level 14',
    description: 'Function arguments',
    color: '#2A3038',
    hoverColor: '#0A1018',
    route: '/quiz/next-level',
    icon: 'bi-cpu',
  },
  {
    id: 'level-15',
    title: 'Level 15',
    description: 'Return values',
    color: '#212830',
    hoverColor: '#011008',
    route: '/quiz/next-level',
    icon: 'bi-box-arrow-in-right',
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
  {
    id: 'level-17',
    title: 'Level 17',
    description: 'Dictionaries',
    color: '#7B8290',
    hoverColor: '#5B6270',
    route: '/quiz/next-level',
    icon: 'bi-grid-3x3',
  },
  {
    id: 'level-18',
    title: 'Level 18',
    description: 'Sets',
    color: '#8B929F',
    hoverColor: '#6B728F',
    route: '/quiz/next-level',
    icon: 'bi-union',
  },
  {
    id: 'level-19',
    title: 'Level 19',
    description: 'File handling',
    color: '#9BA2AF',
    hoverColor: '#7B828F',
    route: '/quiz/next-level',
    icon: 'bi-file-earmark',
  },
  {
    id: 'level-20',
    title: 'Level 20',
    description: 'Exceptions',
    color: '#ABB2BF',
    hoverColor: '#8B929F',
    route: '/quiz/next-level',
    icon: 'bi-exclamation-triangle',
  },
  {
    id: 'level-21',
    title: 'Level 21',
    description: 'Try-except',
    color: '#BBC2CF',
    hoverColor: '#9BA2BF',
    route: '/quiz/next-level',
    icon: 'bi-shield-exclamation',
  },
  {
    id: 'level-22',
    title: 'Level 22',
    description: 'Modules',
    color: '#CBD2DF',
    hoverColor: '#ABB2CF',
    route: '/quiz/next-level',
    icon: 'bi-box',
  },
  {
    id: 'level-23',
    title: 'Level 23',
    description: 'Packages',
    color: '#DBE2EF',
    hoverColor: '#BBC2DF',
    route: '/quiz/next-level',
    icon: 'bi-box-seam',
  },
  {
    id: 'level-24',
    title: 'Level 24',
    description: 'Classes',
    color: '#ECF2F9',
    hoverColor: '#CDF2E9',
    route: '/quiz/next-level',
    icon: 'bi bi-people',
  },
  {
    id: 'level-25',
    title: 'Level 25',
    description: 'Objects',
    color: '#F0F4F8',
    hoverColor: '#D0F4E8',
    route: '/quiz/next-level',
    icon: 'bi-person-badge',
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
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