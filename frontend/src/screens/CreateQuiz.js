import React from 'react';
import Container from '../components/Container';
import { useState } from 'react';
import questionsJSON from '../questions.json';
import Question from '../components/Question';

const CreateQuiz = () => {
  const [questions, setQuestions] = useState(questionsJSON);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const userQuestions = [];

  const nextHandler = () => {};

  const skipHandler = () => {};

  const backHandler = () => {};

  console.log(questions);
  return (
    <Container>
      <Question
        question={questions[currentQuestion]}
        onNext={nextHandler}
        onSkip={skipHandler}
        onBack={backHandler}
        index={currentQuestion}
      />
    </Container>
  );
};

export default CreateQuiz;
