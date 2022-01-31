import React from 'react';
import { Button } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4">
        <h2>How well do your friends know you?</h2>
        <h2>Let's see in 3 easy steps...</h2>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4">
        <ul>
          <li>Enter your name</li>
          <li>Choose questions</li>
          <li>Share link</li>
        </ul>
        <Button variant="dark w-10">Get started</Button>
      </div>
    </>
  );
};

export default HomeScreen;