import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import DetailsForm from '../components/DetailsForm';
import Question from '../components/Question';

const QuizCreation = () => {
  const [name, setName] = useState('');
  const nameHandler = (e, usrName) => {
    e.preventDefault();
    setName(name);
  };

  return (
    <Container className="pt-4 w-50">
      <h3>Create Quiz</h3>
      {/* <DetailsForm
        title="Enter your name"
        btnText="Next"
        btnType="submit"
        controlId="userName"
        controlType="text"
        placeholder="Your Name"
        onClickHandler={nameHandler}
      /> */}
      <Question />
    </Container>
  );
};

export default QuizCreation;
