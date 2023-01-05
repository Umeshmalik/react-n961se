import React from 'react';
import './style.css';

const Circle = ({ color, disable }) => {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: color,
        cursor: disable ? 'not-allowed' : 'pointer',
      }}
    ></div>
  );
};

export default Circle;
