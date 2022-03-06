import React from 'react';

const Card = (props) => {
  return (
    <div className="relative bg-gray-100 p-4 mt-6 shadow-md min-w-max w-2/4 2xl:w-2/5 flex flex-col pb-6">
      {props.children}
    </div>
  );
};

export default Card;
