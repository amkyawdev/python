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
  // Levels 26-50
  { id: 'level-26', title: 'Level 26', description: 'Inheritance', color: '#E8ECF0', hoverColor: '#C8ECF0', route: '/quiz/next-level', icon: 'bi-diagram-2-fill' },
  { id: 'level-27', title: 'Level 27', description: 'Polymorphism', color: '#E0E4E8', hoverColor: '#C0E4E8', route: '/quiz/next-level', icon: 'bi bi-arrow-repeat' },
  { id: 'level-28', title: 'Level 28', description: 'Encapsulation', color: '#D8DCE0', hoverColor: '#B8DCE0', route: '/quiz/next-level', icon: 'bi-shield-lock' },
  { id: 'level-29', title: 'Level 29', description: 'Methods', color: '#D0D4D8', hoverColor: '#B0D4D8', route: '/quiz/next-level', icon: 'bi-gear' },
  { id: 'level-30', title: 'Level 30', description: 'Class variables', color: '#C8CCD0', hoverColor: '#A8CCD0', route: '/quiz/easy', icon: 'bi-hdd' },
  { id: 'level-31', title: 'Level 31', description: 'Instance variables', color: '#C0C4C8', hoverColor: '#A0C4C8', route: '/quiz/easy', icon: 'bi-cpu-fill' },
  { id: 'level-32', title: 'Level 32', description: 'Constructors', color: '#B8BCC0', hoverColor: '#98BCC0', route: '/quiz/easy', icon: 'bi-tools' },
  { id: 'level-33', title: 'Level 33', description: 'self keyword', color: '#B0B4B8', hoverColor: '#90B4B8', route: '/quiz/middle', icon: 'bi-arrow-right-circle' },
  { id: 'level-34', title: 'Level 34', description: 'Instance methods', color: '#A8ACB0', hoverColor: '#88ACB0', route: '/quiz/middle', icon: 'bi-play-circle' },
  { id: 'level-35', title: 'Level 35', description: 'Static methods', color: '#A0A4A8', hoverColor: '#80A4A8', route: '/quiz/middle', icon: 'bi-pause-circle' },
  { id: 'level-36', title: 'Level 36', description: 'Class methods', color: '#989C9F', hoverColor: '#789C9F', route: '/quiz/middle', icon: 'bi-stop-circle' },
  { id: 'level-37', title: 'Level 37', description: 'Properties', color: '#909497', hoverColor: '#709497', route: '/quiz/middle', icon: 'bi-square' },
  { id: 'level-38', title: 'Level 38', description: 'Iterators', color: '#888C8F', hoverColor: '#688C8F', route: 'quiz/next-level', icon: 'bi-arrow-repeat' },
  { id: 'level-39', title: 'Level 39', description: 'Generators', color: '#808487', hoverColor: '#608487', route: '/quiz/next-level', icon: 'bi-lightning' },
  { id: 'level-40', title: 'Level 40', description: 'Decorators', color: '#787C7F', hoverColor: '#587C7F', route: '/quiz/next-level', icon: 'bi-award' },
  { id: 'level-41', title: 'Level 41', description: 'Lambda', color: '#707477', hoverColor: '#507477', route: '/quiz/next-level', icon: 'bi-cloud' },
  { id: 'level-42', title: 'Level 42', description: 'Map function', color: '#686C6F', hoverColor: '#486C6F', route: '/quiz/next-level', icon: 'bi-map' },
  { id: 'level-43', title: 'Level 43', description: 'Filter function', color: '#606467', hoverColor: '#406467', route: '/quiz/next-level', icon: 'bi-funnel' },
  { id: 'level-44', title: 'Level 44', description: 'Reduce function', color: '#585C5F', hoverColor: '#385C5F', route: '/quiz/next-level', icon: 'bi-arrow-down' },
  { id: 'level-45', title: 'Level 45', description: 'List comprehension', color: '#505457', hoverColor: '#305457', route: '/quiz/middle', icon: 'bi-card-list' },
  { id: 'level-46', title: 'Level 46', description: 'Dict comprehension', color: '#484C4F', hoverColor: '#284C4F', route: '/quiz/middle', icon: 'bi-card-heading' },
  { id: 'level-47', title: 'Level 47', description: 'Set comprehension', color: '#404447', hoverColor: '#204447', route: '/quiz/middle', icon: 'bi-blockquote-left' },
  { id: 'level-48', title: 'Level 48', description: 'Zip function', color: '#383C3F', hoverColor: '#183C3F', route: '/quiz/middle', icon: 'bi-arrows-collapse' },
  { id: 'level-49', title: 'Level 49', description: 'Enumerate', color: '#303437', hoverColor: '#103437', route: '/quiz/easy', icon: 'bi-list-ol' },
  { id: 'level-50', title: 'Level 50', description: 'Any and All', color: '#282C2F', hoverColor: '#082C2F', route: '/quiz/middle', icon: 'bi-check2-all' },
  // Levels 51-75
  { id: 'level-51', title: 'Level 51', description: 'Virtual env', color: '#B8D4E3', hoverColor: '#98B4C3', route: '/quiz/middle', icon: 'bi-booted' },
  { id: 'level-52', title: 'Level 52', description: 'Pip', color: '#A8C8D3', hoverColor: '#88A8B3', route: '/quiz/easy', icon: 'bi-boxes' },
  { id: 'level-53', title: 'Level 53', description: 'pip install', color: '#98BCD3', hoverColor: '#789CC3', route: '/quiz/easy', icon: 'bi-download' },
  { id: 'level-54', title: 'Level 54', description: 'pip list', color: '#88B0C3', hoverColor: '#68A0C3', route: '/quiz/easy', icon: 'bi-list' },
  { id: 'level-55', title: 'Level 55', description: 'pip freeze', color: '#78A4B3', hoverColor: '#5894B3', route: '/quiz/middle', icon: 'bi-snow' },
  { id: 'level-56', title: 'Level 56', description: 'requirements.txt', color: '#6A98A3', hoverColor: '#4A7893', route: '/quiz/middle', icon: 'bi-file-text' },
  { id: 'level-57', title: 'Level 57', description: 'JSON', color: '#5A8A93', hoverColor: '#3A6A93', route: '/quiz/middle', icon: 'bi-braces' },
  { id: 'level-58', title: 'Level 58', description: 'CSV', color: '#4A7C83', hoverColor: '#2A5C83', route: '/quiz/middle', icon: 'bi-table' },
  { id: 'level-59', title: 'Level 59', description: 'datetime', color: '#3A6E73', hoverColor: '#1A4E63', route: '/quiz/next-level', icon: 'bi-calendar' },
  { id: 'level-60', title: 'Level 60', description: 'timedelta', color: '#2A6063', hoverColor: '#0A4063', route: '/quiz/next-level', icon: 'bi-clock' },
  { id: 'level-61', title: 'Level 61', description: 'os module', color: '#1A5253', hoverColor: '#0A3203', route: '/quiz/next-level', icon: 'bi-terminal' },
  { id: 'level-62', title: 'Level 62', description: 'sys module', color: '#0A4443', hoverColor: '#0A2403', route: '/quiz/next-level', icon: 'bi-display' },
  { id: 'level-63', title: 'Level 63', description: 'random module', color: '#98C4D3', hoverColor: '#78A4C3', route: '/quiz/easy', icon: 'bi-shuffle' },
  { id: 'level-64', title: 'Level 64', description: 'math module', color: '#88B4C3', hoverColor: '#6894B3', route: '/quiz/easy', icon: 'bi-calculator' },
  { id: 'level-65', title: 'Level 65', description: 'statistics', color: '#78A4B3', hoverColor: '#588493', route: '/quiz/middle', icon: 'bi-bar-chart' },
  { id: 'level-66', title: 'Level 66', description: 'regular expression', color: '#6894A3', hoverColor: '#487493', route: '/quiz/next-level', icon: 'bi-search' },
  { id: 'level-67', title: 'Level 67', description: 'regex patterns', color: '#588493', hoverColor: '#386473', route: '/quiz/next-level', icon: 'bi-regex' },
  { id: 'level-68', title: 'Level 68', description: 're.search', color: '#487483', hoverColor: '#285473', route: '/quiz/next-level', icon: 'bi-binoculars' },
  { id: 'level-69', title: 'Level 69', description: 're.match', color: '#386473', hoverColor: '#184463', route: '/quiz/next-level', icon: 'bi-bullseye' },
  { id: 'level-70', title: 'Level 70', description: 're.findall', color: '#285463', hoverColor: '#083463', route: '/quiz/next-level', icon: 'bi-zoom-in' },
  { id: 'level-71', title: 'Level 71', description: 'Web scraping', color: '#184453', hoverColor: '#002453', route: '/quiz/next-level', icon: 'bi-globe' },
  { id: 'level-72', title: 'Level 72', description: 'requests', color: '#083443', hoverColor: '#001443', route: '/quiz/next-level', icon: 'bi-send' },
  { id: 'level-73', title: 'Level 73', description: 'BeautifulSoup', color: '#98B8C8', hoverColor: '#7898B8', route: '/quiz/next-level', icon: 'bi-soup' },
  { id: 'level-74', title: 'Level 74', description: 'SQLite', color: '#88A8B8', hoverColor: '#688898', route: '/quiz/next-level', icon: 'bi-database' },
  { id: 'level-75', title: 'Level 75', description: 'SQL queries', color: '#7898A8', hoverColor: '#587888', route: '/quiz/next-level', icon: 'bi-server' },
  // Levels 76-100
  { id: 'level-76', title: 'Level 76', description: 'SQL join', color: '#688898', hoverColor: '#486878', route: '/quiz/next-level', icon: 'bi-link' },
  { id: 'level-77', title: 'Level 77', description: 'SQL inner join', color: '#587888', hoverColor: '#385868', route: '/quiz/next-level', icon: 'bi-diagram-3' },
  { id: 'level-78', title: 'Level 78', description: 'SQL left join', color: '#487878', hoverColor: '#285868', route: '/quiz/next-level', icon: 'bi-diagram-3-fill' },
  { id: 'level-79', title: 'Level 79', description: 'SQL group by', color: '#386868', hoverColor: '#184858', route: '/quiz/next-level', icon: 'bi-collection' },
  { id: 'level-80', title: 'Level 80', description: 'SQL order by', color: '#285858', hoverColor: '#083858', route: '/quiz/next-level', icon: 'bi-sort-down' },
  { id: 'level-81', title: 'Level 81', description: 'SQL where', color: '#184848', hoverColor: '#002848', route: '/quiz/middle', icon: 'bi-filter' },
  { id: 'level-82', title: 'Level 82', description: 'SQL having', color: '#083838', hoverColor: '#001838', route: '/quiz/middle', icon: 'bi-funnel-fill' },
  { id: 'level-83', title: 'Level 83', description: 'Threading', color: '#98C8D8', hoverColor: '#78A8C8', route: '/quiz/next-level', icon: 'bi-gear-wide' },
  { id: 'level-84', title: 'Level 84', description: 'Thread', color: '#88B8C8', hoverColor: '#6898B8', route: '/quiz/next-level', icon: 'bi-disc' },
  { id: 'level-85', title: 'Level 85', description: 'Multithreading', color: '#78A8B8', hoverColor: '#589898', route: '/quiz/next-level', icon: 'bi-speedometer' },
  { id: 'level-86', title: 'Level 86', description: 'Thread pool', color: '#6898A8', hoverColor: '#487888', route: '/quiz/next-level', icon: 'bi-stack' },
  { id: 'level-87', title: 'Level 87', description: 'Async IO', color: '#588898', hoverColor: '#386878', route: '/quiz/next-level', icon: 'bi-lightning-charge' },
  { id: 'level-88', title: 'Level 88', description: 'asyncio', color: '#487888', hoverColor: '#285868', route: '/quiz/next-level', icon: 'bi-hourglass-split' },
  { id: 'level-89', title: 'Level 89', description: 'await', color: '#387878', hoverColor: '#185868', route: '/quiz/next-level', icon: 'bi-hourglass-bottom' },
  { id: 'level-90', title: 'Level 90', description: 'async def', color: '#286868', hoverColor: '#084868', route: '/quiz/next-level', icon: 'bi-play' },
  { id: 'level-91', title: 'Level 91', description: 'Testing', color: '#185858', hoverColor: '#003858', route: '/quiz/next-level', icon: 'bi-bug' },
  { id: 'level-92', title: 'Level 92', description: 'unittest', color: '#084848', hoverColor: '#002848', route: '/quiz/next-level', icon: 'bi-bug-fill' },
  { id: 'level-93', title: 'Level 93', description: 'pytest', color: '#98D0E0', hoverColor: '#78B0D0', route: '/quiz/next-level', icon: 'bi-check-circle' },
  { id: 'level-94', title: 'Level 94', description: 'Assertions', color: '#88C0D0', hoverColor: '#68A0C0', route: '/quiz/next-level', icon: 'bi-check-square' },
  { id: 'level-95', title: 'Level 95', description: 'Fixtures', color: '#78B0C0', hoverColor: '#5890A0', route: '/quiz/next-level', icon: 'bi-box-check' },
  { id: 'level-96', title: 'Level 96', description: 'Mock', color: '#68A0B0', hoverColor: '#488090', route: '/quiz/next-level', icon: 'bi-mask' },
  { id: 'level-97', title: 'Level 97', description: 'Coverage', color: '#5890A0', hoverColor: '#387080', route: '/quiz/next-level', icon: 'bi-pie-chart' },
  { id: 'level-98', title: 'Level 98', description: 'CI/CD', color: '#488090', hoverColor: '#286070', route: '/quiz/next-level', icon: 'bi-arrow-repeat' },
  { id: 'level-99', title: 'Level 99', description: 'Docker', color: '#387080', hoverColor: '#185060', route: '/quiz/next-level', icon: 'bi-docker' },
  { id: 'level-100', title: 'Level 100', description: 'Final Project', color: '#2870A0', hoverColor: '#005080', route: '/quiz/next-level', icon: 'bi-trophy' },
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
              icon={level.icon}
            />
            <p className="text-gray-600 mt-2 text-center text-sm">
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