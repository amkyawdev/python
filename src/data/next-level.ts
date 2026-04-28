export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const nextLevelQuestions: Question[] = [
  {
    id: 1,
    question: "What is a decorator in Python?",
    options: [
      "A way to add comments to functions",
      "A function that extends the behavior of another function",
      "A method to hide code",
      "A type of variable"
    ],
    correctAnswer: 1,
    explanation: "Decorators are functions that modify the behavior of other functions using @ symbol."
  },
  {
    id: 2,
    question: "What is the purpose of __init__ in a Python class?",
    options: [
      "To delete the class",
      "To initialize the object attributes",
      "To import modules",
      "To create a private method"
    ],
    correctAnswer: 1,
    explanation: "__init__ is a constructor method called when an object is created."
  },
  {
    id: 3,
    question: "How do you handle exceptions in Python?",
    options: [
      "try-catch",
      "try-except",
      "catch-error",
      "handle-error"
    ],
    correctAnswer: 1,
    explanation: "Python uses try-except blocks for exception handling."
  },
  {
    id: 4,
    question: "What is method overriding?",
    options: [
      "Calling a method multiple times",
      "Replacing a parent class method in a child class",
      "Creating a new method",
      "Deleting a method"
    ],
    correctAnswer: 1,
    explanation: "Method overriding allows a child class to provide a specific implementation of a method defined in its parent."
  },
  {
    id: 5,
    question: "What does @property decorator do?",
    options: [
      "Deletes a property",
      "Creates a getter method",
      "Makes a method static",
      "Creates a class method"
    ],
    correctAnswer: 1,
    explanation: "@property decorator allows you to define methods that behave like attributes."
  }
];

export const nextLevelDocs = [
  {
    title: "OOP Concepts",
    content: "Object-Oriented Programming in Python uses classes to bundle data and methods together."
  },
  {
    title: "Inheritance",
    content: "Inheritance allows a class (child) to inherit attributes and methods from another class (parent)."
  },
  {
    title: "Decorators",
    content: "Decorators modify the behavior of functions or classes using @ symbol before the function name."
  },
  {
    title: "Exception Handling",
    content: "Use try-except blocks to handle errors gracefully without stopping the program."
  },
  {
    title: "Advanced Topics",
    content: "Advanced Python includes metaclasses, generators, context managers, and async programming."
  }
];