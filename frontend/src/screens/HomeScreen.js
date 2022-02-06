import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';

const HomeScreen = () => {
  const getStartedHandler = (e) => {};
  return (
    <Container classNames="flex-col items-center text-gray-900 mt-12">
      <h2 className="text-2xl mt-2">How well do your friends know you?</h2>
      <p className="p-2">Let's find out in 3 easy steps...</p>
      <ul className="list-decimal">
        <li>Enter your name..</li>
        <li>Choose Questions..</li>
        <li>Share the link!</li>
      </ul>
      <Button
        btnText="Get Started"
        btnType="submit"
        btnOnClick={getStartedHandler}
        classNames="mt-4"
      />
    </Container>
  );
};

export default HomeScreen;
