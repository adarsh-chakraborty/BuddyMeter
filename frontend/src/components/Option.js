import { useState } from 'react';
import classes from './Option.module.css';

const Option = ({ option, onRadioChange, queId }) => {
  return (
    <div>
      <label
        className={`${classes.optionParent} cursor-pointer flex items-center`}
        id={queId}
      >
        <input
          type="radio"
          value={option}
          name={queId}
          className="hidden"
          onChange={onRadioChange}
          id={`${queId}${option}`}
        />
        <span
          className={`w-4 h-4 inline-block mr-1 border border-gray-400 transition duration-200 ${classes.box}`}
        ></span>
        <span className="pl-1">{option}</span>
      </label>
    </div>
  );
};

export default Option;
