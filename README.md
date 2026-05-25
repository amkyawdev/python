# Python Quiz App

A fully functional Python Quiz application built with Next.js (App Router), TypeScript, Tailwind CSS, Three.js, and Framer Motion.

- **Interactive 3D Buttons**: Three.js animated buttons with hover and click effects
- **Sound System**: Web Audio API for correct/wrong answer feedback
- **Level-Based Quizzes**: Easy, Middle, and Next Level difficulty
- **Docs System**: Search through Python documentation
- **About Page**: Developer information with 3D animations
- **Responsive Design**: Mobile and desktop friendly

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Three.js / @react-three/fiber / @react-three/drei
- Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://demo link](https://python-amkyaw.vercel.app) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

Or using CLI:

```bash
npm i -g vercel
vercel
```

### Manual Build

```bash
npm run build
# The output is in the .next directory
```

## Project Structure

```
python-quiz-app/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Get Start (Home)
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── level/                # Choose Level
│   │   ├── quiz/
│   │   │   ├── easy/             # Easy quiz
│   │   │   ├── middle/           # Middle quiz
│   │   │   └── next-level/       # Next Level quiz
│   │   ├── docs/                 # Docs page
│   │   └── about/                # About page
│   ├── components/
│   │   └── ThreeButton.tsx        # 3D animated button
│   ├── hooks/
│   │   └── useSound.ts           # Sound hook
│   └── data/
│       ├── docs.ts               # General docs
│       ├── easy.ts               # Easy questions
│       ├── middle.ts             # Middle questions
│       └── next-level.ts         # Next Level questions
├── public/
│   └── docs/                    # .bin doc files
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vercel.json
└── postcss.config.js
```

## Pages

| Route | Description |
|------|-------------|
| `/` | Get Start - Hero with "Start Quiz" 3D button |
| `/level` | Choose Level - Easy, Middle, Next Level cards |
| `/quiz/easy` | Easy quiz - 5 basic Python questions |
| `/quiz/middle` | Medium quiz - loops, functions, lists |
| `/quiz/next-level` | Hard quiz - OOP, decorators, exceptions |
| `/docs` | Docs with search functionality |
| `/about` | Developer profile page |

## Color Palette

- Baby Blue: `#B8D4E3`
- Baby Blue Light: `#D6E9F2`
- Baby Blue Dark: `#8BB8CC`
- Gray Soft: `#6B7280`

## License

MIT
