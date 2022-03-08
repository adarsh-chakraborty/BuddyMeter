import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const ErrorScreen = () => {
  return (
    <Container classNames="flex-col items-center mt-44">
      <div className="text-4xl font-bold text-gray-700 border-b-2 border-slate-900 px-1">
        404
      </div>
      <div className="text-sm p-2">
        This page isn't available.{' '}
        <Link to="/">
          <span className="text-blue-800 underline underline-offset-2">
            Click here
          </span>
        </Link>{' '}
        to visit home page.
      </div>
    </Container>
  );
};

export default ErrorScreen;
