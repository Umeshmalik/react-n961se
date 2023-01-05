import React, { useState } from 'react';
import Result from './Result';
import Circle from './Circle';

const Step = (props) => {
  const { actualAnswer, currSel, setCurrStep, disable, setIsGameWon } = props;
  const [choosenColor, setChoosenColor] = useState([]);
  const [check, setCheck] = useState(false);

  return (
    <div className="answer">
      <div className="circles">
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                if (currSel) {
                  setChoosenColor((prev) => ({ ...prev, [idx]: currSel }));
                }
              }}
            >
              {' '}
              <Circle
                color={choosenColor[idx] || 'white'}
                disable={disable}
              />{' '}
            </div>
          );
        })}
      </div>
      {Object.keys(choosenColor).length === 4 ? (
        <button
          className="submit"
          onClick={() => {
            setCheck(true);
            setCurrStep((prev) => prev + 1);
          }}
        >
          {' '}
        </button>
      ) : null}
      {check ? (
        <div className="result">
          <Result
            actualAnswer={actualAnswer}
            choosenColor={choosenColor}
            setIsGameWon={setIsGameWon}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Step;
