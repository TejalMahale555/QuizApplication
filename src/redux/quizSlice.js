import { createSlice } from '@reduxjs/toolkit';

const allQuestions = [
  { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  { question: "What is the capital of Japan?", options: ["Tokyo", "Seoul", "Beijing", "Bangkok"], answer: "Tokyo" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
  { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
  { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"], answer: "William Shakespeare" },
  { question: "What is the speed of light?", options: ["299,792 km/s", "150,000 km/s", "300,000 km/s", "299,792 m/s"], answer: "299,792 km/s" },
  { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Oganesson"], answer: "Oxygen" },
  { question: "What is the hardest natural substance on Earth?", options: ["Iron", "Diamond", "Graphite", "Gold"], answer: "Diamond" },
  { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
  // Add more questions as needed
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const initialState = {
  questions: shuffleArray(allQuestions).slice(0, 5), // Select a subset of 5 questions
  currentQuestionIndex: 0,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion(state) {
      state.currentQuestionIndex++;
    },
    incrementScore(state) {
      state.score++;
    },
    resetQuiz(state) {
      state.questions = shuffleArray(allQuestions).slice(0, 5);
      state.currentQuestionIndex = 0;
      state.score = 0;
    },
  },
});

export const { nextQuestion, incrementScore, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
