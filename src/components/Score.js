import React from 'react';
import { useSelector } from 'react-redux';
import './Score.css';

const Score = () => {
  const score = useSelector(state => state.quiz.score);
  const questions = useSelector(state => state.quiz.questions);

  return (
    <div className="score">
      <h2>Quiz Completed!</h2>
      <p>Your score is {score} out of {questions.length}</p>
    </div>
  );
};

export default Score;
