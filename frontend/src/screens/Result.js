import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const getScoreResult = (score) => {
  switch (score) {
    case 5:
      return 'Good Going';
    case 6:
      return 'You got it more than half!';
    case 7:
      return 'GG! Well Played!';
    case 8:
      return 'Woah! that was well played!';
    case 9:
      return `Whaat??!! That's an amazing score!`;
    case 10:
      return 'Excellent!! Full Score!! GG! 🤩';
    case 11:
      return 'What?';

    default:
      return `You can do better next time!`;
  }
};
const Result = ({ score = 0 }) => {
  return (
    <Container classNames="mt-36 items-center flex-col">
      <div className="text-xl">Your score is</div>
      <div className="text-3xl border-b-2 border-gray-700 pb-1 px-3 py-2 font-semibold">
        {score}/10
      </div>
      <div className="text-xl text-gray-900 font-semibold">
        {getScoreResult(score)}
      </div>
      <div className="text-sm text-gray-600 mt-4">
        Now, Create your own quiz and share with your friends!
      </div>
      <div className="text-sm text-gray-800">
        <span className="underline underline-offset-2 text-blue-900">
          <Link to="/">Click here</Link>
        </span>
        <span> to get started!</span>
      </div>
    </Container>
  );
};

export default Result;
