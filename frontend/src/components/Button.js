import React from 'react';

const Button = ({ btnText, btnType, classNames, onClick, disabled }) => {
  return (
    <button
      type={btnType}
      className={`bg-[#364958] disabled:bg-slate-600 text-gray-50 rounded-sm shadow-md hover:bg-slate-600 transition-colors duration-200 ease-in-out ${
        classNames && classNames
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
