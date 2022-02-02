import React from 'react';
import { Container } from 'react-bootstrap';
import DetailsForm from '../components/DetailsForm';

const GetStarted = () => {
  const nameHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="pt-4 w-50">
      <h3>Getting Started..</h3>
      <DetailsForm
        title="Enter your name"
        btnText="Next"
        btnType="submit"
        controlId="userName"
        controlType="text"
        placeholder="Your Name"
        onClickHandler={nameHandler}
      />
    </Container>
  );
};

export default GetStarted;
