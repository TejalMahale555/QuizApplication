import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Answer from './Answer';
import { nextQuestion, incrementScore } from '../redux/quizSlice';
import './Question.css';

const Question = () => {
  const currentQuestionIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const question = useSelector(state => state.quiz.questions[currentQuestionIndex]);
  const dispatch = useDispatch();

  const handleAnswer = (option) => {
    if (option === question.answer) {
      dispatch(incrementScore());
    }
    dispatch(nextQuestion());
  };

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map(option => (
          <Answer key={option} option={option} handleAnswer={handleAnswer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
