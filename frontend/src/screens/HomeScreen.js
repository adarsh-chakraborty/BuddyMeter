import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import QuestionContext from '../context/question-context';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const { setName: dispatchSetName } = useContext(QuestionContext);
  const navigate = useNavigate();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const getStartedHandler = () => {
    if (name.trim() === '') {
      return;
    }
    dispatchSetName(name);
    navigate('/create-quiz');
  };
  return (
    <Container classNames="flex-col items-center text-gray-900 mt-12">
      <h2 className="text-2xl mt-2">How well do your friends know you?</h2>
      <p className="p-2">Let's find out in 3 easy steps...</p>
      <ul className="list-decimal">
        <li>Enter your name..</li>
        <li>Choose Questions..</li>
        <li>Share the link!</li>
      </ul>
      <input
        type="text"
        value={name}
        onChange={nameChangeHandler}
        placeholder="Enter your name..."
        className="focus:ring-0 border-gray-500 focus:border-gray-600 focus:border-2   mt-4 transition-colors duration-150 border   rounded-sm shadow-md focus:bg-slate-100 hover:bg-slate-50"
      />

      <Button
        btnText="Get Started"
        btnType="submit"
        classNames="mt-4 p-2 w-48"
        disabled={name.trim() === ''}
        onClick={getStartedHandler}
      />
    </Container>
  );
};

export default HomeScreen;
