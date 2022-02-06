import React from 'react';

const Container = (props) => {
  return (
    <div
      className={`w-full px-8 mx-auto flex justify-center ${
        props.classNames && props.classNames
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
