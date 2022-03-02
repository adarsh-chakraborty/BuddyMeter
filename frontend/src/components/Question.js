import { useState, useContext, useEffect } from 'react';
import React from 'react';
import Button from './Button';
import Card from './Card';
import Option from './Option';
import QuestionContext from '../context/question-context';

const Question = () => {
  const {
    questions,
    currentIndex,
    loading,
    nextQuestion,
    prevQuestion,
    addQuestion,
    userQuestions
  } = useContext(QuestionContext);

  const currentQuestion = questions[currentIndex];

  const [selectedOption, setSelectedOption] = useState({
    queId: currentQuestion?._id ?? null,
    answer: null
  });

  useEffect(() => {
    if (userQuestions[currentIndex]?.answer) {
      setSelectedOption(userQuestions[currentIndex].answer);
    }
  }, [selectedOption, currentIndex, userQuestions]);

  if (loading) return <div>Loading... Please wait</div>;

  const onNextHandler = () => {
    addQuestion({ ...selectedOption, index: currentIndex });

    nextQuestion();
  };

  const onSkipHandler = () => {};

  const onBackHandler = () => {
    prevQuestion();
  };

  const handleRadioClick = (queId, answer) => {
    setSelectedOption({ queId, answer });
    // setSelectedQuestion({ index: currentIndex, queId, answer: value });
  };

  const isRadioSelected = (value) => selectedOption.answer === value;

  return (
    <Card>
      <div className="absolute left-0 top-0 p-3 text-sm text-gray-500">
        {currentIndex + 1}/10
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {currentQuestion.question}
        </h1>

        <div className="px-2 flex flex-col gap-1 py-4">
          {currentQuestion.options.map((option, index) => {
            return (
              <Option
                option={option}
                index={index}
                key={`${currentQuestion._id}${index}`}
                onRadioChange={handleRadioClick}
                queId={currentQuestion._id}
                checked={isRadioSelected(option)}
              />
            );
          })}
        </div>

        <div className="flex gap-2">
          <Button
            btnText={'Next'}
            classNames="min-w-max px-5 py-2"
            disabled={selectedOption ? false : true}
            onClick={onNextHandler}
          />
          <Button
            btnText="Skip this Question"
            classNames="min-w-max px-3 py-2"
            onClick={onSkipHandler}
          />
          <Button
            btnText="Back"
            classNames="min-w-max px-5 py-2"
            onClick={onBackHandler}
            disabled={currentIndex === 0}
          />
        </div>
      </div>
    </Card>
  );
};

export default Question;
