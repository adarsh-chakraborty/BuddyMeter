import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Error = ({ text = 'Something went wrong, try again later.' }) => {
  return (
    <Container classNames="flex-col w-fit items-center">
      <div className="bg-red-100 border border-red-700 shadow-md rounded px-4 py-5 font-semibold text-red-900">
        {text}
      </div>
      <div className="text-sm text-gray-500 font-semibold mt-3 ">
        <Link to="/">
          <span className="text-blue-600 underline underline-offset-2">
            Click here
          </span>
        </Link>{' '}
        to go back to home.
      </div>
    </Container>
  );
};

export default Error;
