import { useState, useContext } from 'react';
import React from 'react';
import Button from './Button';
import Card from './Card';
import Option from './Option';
import QuestionContext from '../context/question-context';

const Question = () => {
  const { questions, currentIndex, loading, nextQuestion, addQuestion } =
    useContext(QuestionContext);

  const [selectedOption, setSelectedOption] = useState();

  if (loading) return <div>Loading... Please wait</div>;

  const currentQuestion = questions[currentIndex];

  const onNextHandler = () => {
    addQuestion(selectedOption);
    setSelectedOption(null);
    nextQuestion();
  };

  const onSkipHandler = () => {};

  const onBackHandler = () => {};

  const onRadioChangeHandler = (queId, e) => {
    setSelectedOption({ index: currentIndex, queId, answer: e.target.value });
  };

  return (
    <Card>
      <div className="absolute left-0 top-0 p-3 text-sm text-gray-500">
        {currentIndex + 1}/10
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {currentQuestion.question}
        </h1>

        {/* Options */}
        <div className="px-2 flex flex-col gap-1 py-4">
          {currentQuestion.options.map((option, index) => {
            return (
              <Option
                option={option}
                index={index}
                key={`${currentQuestion._id}${index}`}
                onRadioChange={onRadioChangeHandler.bind(
                  null,
                  currentQuestion._id
                )}
                queId={currentQuestion._id}
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
          />
        </div>
      </div>
    </Card>
  );
};

export default Question;
