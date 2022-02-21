import { useState } from 'react';
import React from 'react';
import Button from './Button';
import Card from './Card';
import Option from './Option';

const Question = ({ question: current, onNext, onSkip, index }) => {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const onRadioChangeHandler = (queId, e) => {
    console.log(queId, e);
    setSelectedQuestion({ queId, answer: e.target.value });
  };

  return (
    <Card>
      <div className="absolute left-0 top-0 p-3 text-sm text-gray-500">
        {index + 1}/10
      </div>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {current.question}
        </h1>

        {/* Options */}
        <div className="px-2 flex flex-col gap-1 py-4">
          {current.options.map((option, index) => {
            return (
              <Option
                option={option}
                index={index}
                key={`${current._id}${index}`}
                onRadioChange={onRadioChangeHandler.bind(null, current._id)}
                queId={current._id}
              />
            );
          })}
        </div>

        <div className="flex gap-2">
          <Button
            btnText={'Next'}
            classNames="min-w-max px-5 py-2"
            disabled={selectedQuestion ? false : true}
            onClick={() => {
              onNext(selectedQuestion);
            }}
          />
          <Button
            btnText="Skip this Question"
            classNames="min-w-max px-3 py-2"
          />
          <Button btnText="Back" classNames="min-w-max px-5 py-2" />
        </div>
      </div>
    </Card>
  );
};

export default Question;
