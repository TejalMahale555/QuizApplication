import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import Score from './Score';
import { resetQuiz } from '../redux/quizSlice';
import './App.css';

const App = () => {
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const questions = useSelector(state => state.quiz.questions);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Quiz App</h1>
      {currentQuestionIndex < questions.length ? <Question /> : <Score />}
      <button onClick={() => dispatch(resetQuiz())} className="reset-button">Reset Quiz</button>
    </div>
  );
};

export default App;
