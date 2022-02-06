import React from 'react';

const Button = ({ btnText, btnType, btnOnClick, classNames }) => {
  return (
    <button
      type={btnType}
      onClick={btnOnClick}
      className={`bg-[#364958] p-2 w-48 text-gray-50 rounded-sm shadow-md hover:bg-slate-600 transition-colors duration-200 ease-in-out ${
        classNames && classNames
      }`}
    >
      {btnText}
    </button>
  );
};

export default Button;
