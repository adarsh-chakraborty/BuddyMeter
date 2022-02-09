import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';

const HomeScreen = () => {
  return (
    <Container classNames="flex-col items-center text-gray-900 mt-12">
      <h2 className="text-2xl mt-2">How well do your friends know you?</h2>
      <p className="p-2">Let's find out in 3 easy steps...</p>
      <ul className="list-decimal">
        <li>Enter your name..</li>
        <li>Choose Questions..</li>
        <li>Share the link!</li>
      </ul>
      <Link to="/create-quiz">
        <Button
          btnText="Get Started"
          btnType="submit"
          classNames="mt-4 p-2 w-48"
        />
      </Link>
    </Container>
  );
};

export default HomeScreen;
