import React from 'react';
import Button from './Button';
import Card from './Card';
import Option from './Option';

const MAX_SKIPS = 3;

const Question = ({
  currentIndex,
  currentQuestion,
  selectedOption,
  onNext,
  onSkip,
  onBack,
  onRadioChange,
  skipLimit
}) => {
  const isRadioSelected = (value) => selectedOption.answer === value;

  return (
    <Card>
      <div className="absolute left-0 top-0 p-3 text-sm text-gray-500">
        {currentIndex + 1}/10
      </div>
      <div className="ml-6 mt-4">
        <h1 className="md:text-2xl font-bold text-slate-900">
          {currentQuestion.question}
        </h1>

        <div className="px-2 flex flex-col gap-1 py-4">
          {currentQuestion.options.map((option, index) => {
            return (
              <Option
                option={option}
                index={index}
                key={`${currentQuestion._id}${index}`}
                onRadioChange={onRadioChange}
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
            disabled={selectedOption.answer ? false : true}
            onClick={onNext}
          />
          {skipLimit < MAX_SKIPS && (
            <Button
              btnText="Skip this Question"
              classNames="min-w-max px-3 py-2"
              onClick={onSkip.bind(null, currentQuestion._id)}
            />
          )}
          <Button
            btnText="Back"
            classNames="min-w-max px-5 py-2"
            onClick={onBack}
            disabled={currentIndex === 0}
          />
        </div>
      </div>
    </Card>
  );
};

export default Question;
