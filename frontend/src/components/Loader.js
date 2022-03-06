import React from 'react';
import classes from './Loader.module.css';

const Loader = ({ text }) => {
  return <div className={classes.loader}>{text}</div>;
};

export default Loader;
