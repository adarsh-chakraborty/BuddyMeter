import React from 'react';
import Container from '../components/Container';
import { useState } from 'react';
import questionsJSON from '../questions.json';
import Question from '../components/Question';

const CreateQuiz = () => {
  const [questions, setQuestions] = useState(questionsJSON);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userQuestions, setUserQuestions] = useState([]);

  const nextHandler = (selectedQuestion) => {
    setUserQuestions((prevQuestions) => {
      let newQuestions = [...prevQuestions];
      newQuestions[questionIndex] = selectedQuestion;
      return newQuestions;
    });

    setQuestionIndex((questionIndex) => ++questionIndex);
  };

  const skipHandler = () => {
    setQuestionIndex((queIndex) => ++queIndex);
  };

  const backHandler = () => {
    setQuestionIndex((queIndex) => --queIndex);
  };

  return (
    <Container>
      <Question
        questions={questions}
        currentIndex={questionIndex}
        onNext={nextHandler}
        onSkip={skipHandler}
        onBack={backHandler}
        questionCount={userQuestions.length}
      />
    </Container>
  );
};

export default CreateQuiz;
