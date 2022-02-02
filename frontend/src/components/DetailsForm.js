import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DetailsForm = (props) => {
  return (
    <Form className="w-50">
      <Form.Group className="mb-3" controlId={props.controlId}>
        <Form.Label>{props.title}</Form.Label>
        <Form.Control
          type={props.controlType}
          placeholder={props.placeholder}
        />
      </Form.Group>

      <Button
        variant="dark"
        type={props.btnType}
        className="w-25"
        onClick={props.onClickHandler}
      >
        {props.btnText}
      </Button>
    </Form>
  );
};

DetailsForm.propTypes = {
  controlId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  controlType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default DetailsForm;
