export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const middleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the correct syntax for a for loop in Python?",
    options: ["for (i = 0; i < 5; i++)", "for i in range(5):", "for i in 5:", "loop i from 0 to 5"],
    correctAnswer: 1,
    explanation: "In Python, use 'for i in range(5):' to iterate 5 times (0 to 4)."
  },
  {
    id: 2,
    question: "How do you define a function in Python?",
    options: ["function myFunc():", "def myFunc():", "func myFunc():", "void myFunc():"],
    correctAnswer: 1,
    explanation: "The 'def' keyword is used to define functions in Python."
  },
  {
    id: 3,
    question: "What is the output of: [x for x in range(3)]?",
    options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[1, 2]"],
    correctAnswer: 0,
    explanation: "range(3) generates [0, 1, 2] - starting from 0 by default."
  },
  {
    id: 4,
    question: "Which method adds an element to the end of a list?",
    options: ["list.add()", "list.append()", "list.push()", "list.insert()"],
    correctAnswer: 1,
    explanation: "append() adds an element to the end of a list."
  },
  {
    id: 5,
    question: "What does the 'break' statement do in a loop?",
    options: ["Ends the program", "Exits the nearest loop", "Skips current iteration", "Continues to next iteration"],
    correctAnswer: 1,
    explanation: "The break statement immediately exits the nearest loop."
  }
];

export const middleDocs = [
  {
    title: "For Loops",
    content: "For loops in Python iterate over sequences. Use range() to iterate a specific number of times."
  },
  {
    title: "While Loops",
    content: "While loops repeat as long as a condition is true. Be careful of infinite loops!"
  },
  {
    title: "Functions",
    content: "Functions are defined using 'def' keyword. They can accept parameters and return values."
  },
  {
    title: "Lists Comprehension",
    content: "List comprehension provides a concise way to create lists: [x for x in iterable]"
  },
  {
    title: "Lambda Functions",
    content: "Lambda functions are anonymous functions defined with 'lambda' keyword: lambda x: x * 2"
  }
];