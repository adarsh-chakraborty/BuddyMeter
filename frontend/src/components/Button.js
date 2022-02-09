import React from 'react';

const Button = ({ btnText, btnType, classNames }) => {
  return (
    <button
      type={btnType}
      className={`bg-[#364958] text-gray-50 rounded-sm shadow-md hover:bg-slate-600 transition-colors duration-200 ease-in-out ${
        classNames && classNames
      }`}
    >
      {btnText}
    </button>
  );
};

export default Button;
