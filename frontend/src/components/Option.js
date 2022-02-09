import React from 'react';
import classes from './Option.module.css';

const Option = ({ option, isSelected, onSelect, index }) => {
  return (
    <div
      className="flex items-center gap-2 font-semibold cursor-pointer hover:font-bold"
      onClick={() => {
        onSelect(index);
      }}
    >
      {isSelected && (
        <div className="inline-block w-3 h-3 rounded-full border bg-gray-700 border-gray-800 ring-2 ring-offset-2 ring-slate-600"></div>
      )}
      {!isSelected && (
        <div className="inline-block w-5 h-5 rounded-full border border-gray-800"></div>
      )}
      <span className="">{option}</span>
    </div>
  );
};

export default Option;

// return (
//   <div className="flex items-center gap-2 font-semibold">
//     <div className="inline-block w-5 h-5 rounded-full border border-gray-800"></div>
//     <span className="">{option}</span>
//   </div>
// );
