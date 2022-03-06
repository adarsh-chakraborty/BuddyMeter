import React from 'react';
import Container from '../components/Container';
import Question from '../components/Question';
import { useState, useEffect, useContext } from 'react';
import QuestionContext from '../context/question-context';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const CreateQuiz = () => {
  const {
    questions,
    currentIndex,
    loading,
    nextQuestion,
    prevQuestion,
    addQuestion,
    userQuestions,
    skipQuestion,
    skipLimit
  } = useContext(QuestionContext);

  const currentQuestion = questions[currentIndex];

  const [selectedOption, setSelectedOption] = useState({
    queId: currentQuestion?._id ?? null,
    answer: null
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (userQuestions[currentIndex]) {
      const { queId, answer } = userQuestions[currentIndex];
      setSelectedOption({ queId, answer });
    }
  }, [currentIndex, userQuestions]);

  if (loading)
    return (
      <Container classNames="mt-44 items-center">
        <Loader text="Loading..." />
      </Container>
    );

  const onNextHandler = () => {
    addQuestion({ ...selectedOption, index: currentIndex });

    if (currentIndex === 9) {
      return navigate('/finish');
    }
    nextQuestion();
    setSelectedOption({ queId: null, answer: null });
  };

  const onSkipHandler = (queId) => {
    console.log('Skipping', queId);
    skipQuestion(queId);
  };

  const onBackHandler = () => {
    prevQuestion();
  };

  const onRadioChange = (queId, answer) => {
    setSelectedOption({ queId, answer });
    // setSelectedQuestion({ index: currentIndex, queId, answer: value });
  };

  return (
    <Container>
      <Question
        currentIndex={currentIndex}
        currentQuestion={currentQuestion}
        onNext={onNextHandler}
        onSkip={onSkipHandler}
        onBack={onBackHandler}
        onRadioChange={onRadioChange}
        selectedOption={selectedOption}
        skipLimit={skipLimit}
      />
    </Container>
  );
};

export default CreateQuiz;
