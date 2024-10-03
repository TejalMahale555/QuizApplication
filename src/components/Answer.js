import React from 'react';
import './Answer.css';

const Answer = ({ option, handleAnswer }) => {
  return (
    <button className="answer" onClick={() => handleAnswer(option)}>
      {option}
    </button>
  );
};

export default Answer;
