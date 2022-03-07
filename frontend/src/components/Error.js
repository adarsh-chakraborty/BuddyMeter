import React from 'react';

const Error = ({ text }) => {
  return (
    <div className="bg-red-100 text-xl font-semibold px-5 py-3 shadow-md rounded">
      {text}
    </div>
  );
};

export default Error;
