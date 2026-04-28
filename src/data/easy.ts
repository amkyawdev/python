export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const easyQuestions: Question[] = [
  {
    id: 1,
    question: "What is the correct way to create a variable in Python?",
    options: ["var x = 5", "x = 5", "let x = 5", "int x = 5"],
    correctAnswer: 1,
    explanation: "In Python, you don't need to declare the variable type. Simply use x = 5 to assign a value."
  },
  {
    id: 2,
    question: "Which function is used to print output in Python?",
    options: ["echo()", "print()", "cout <<", "printf()"],
    correctAnswer: 1,
    explanation: "The print() function is used to output content in Python."
  },
  {
    id: 3,
    question: "What is the result of 2 + 3 * 4 in Python?",
    options: ["20", "14", "24", "11"],
    correctAnswer: 1,
    explanation: "Multiplication has higher precedence, so 3 * 4 = 12, then 2 + 12 = 14."
  },
  {
    id: 4,
    question: "How do you write a comment in Python?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    correctAnswer: 2,
    explanation: "Hash (#) is used for single-line comments in Python."
  },
  {
    id: 5,
    question: "Which data type is used to store text in Python?",
    options: ["char", "text", "str", "string"],
    correctAnswer: 2,
    explanation: "In Python, text is stored using the 'str' (string) data type."
  }
];

export const easyDocs = [
  {
    title: "Variables",
    content: "Variables are containers for storing data values. In Python, variables are created the moment you assign a value to it."
  },
  {
    title: "Data Types",
    content: "Python has various data types including: int, float, str, bool, list, tuple, dict, and set."
  },
  {
    title: "Strings",
    content: "Strings in Python are surrounded by either single or double quotes. They can be concatenated using + operator."
  },
  {
    title: "Lists",
    content: "Lists are used to store multiple items in a single variable. They are ordered, mutable, and allow duplicates."
  },
  {
    title: "Conditionals",
    content: "Python uses if, elif, and else statements for conditional execution of code blocks."
  }
];