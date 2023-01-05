import React, { useState, useEffect } from 'react';
import './style.css';
import Circle from './Circle';
import Step from './Step';

export default function App() {
  const totalChance = 10;
  const [currStep, setCurrStep] = useState(0);
  const [actualAnswer, setActualAnswer] = useState([]);
  const [currSel, setCurrSel] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);
  const options = [
    '#FFB400',
    '#FF5A5F',
    '#8CE071',
    '#00D1C1',
    '#007A87',
    '#7B0051',
  ];
  useEffect(() => {
    calResult();
  }, []);

  const calResult = () => {
    const ans = [];
    for (let i = 0; i < 4; i++) {
      const option = Math.floor(Math.random() * 4);
      ans.push(options[option]);
    }
    setActualAnswer(ans);
  };
  return (
    <div className="app">
      <div className="game">
        <div>
          {Array.from({ length: totalChance }).map((_, idx) => (
            <div
              key={idx}
              className={`guess ${idx === currStep ? 'current' : ''}`}
            >
              <Step
                setIsGameWon={setIsGameWon}
                actualAnswer={actualAnswer}
                currSel={currSel}
                setCurrStep={setCurrStep}
                disable={idx !== currStep}
              />
            </div>
          ))}
        </div>
        <div className="options">
          {options.map((color, idx) => {
            return (
              <div key={color} onClick={() => setCurrSel(color)}>
                {' '}
                <Circle color={color} />{' '}
              </div>
            );
          })}
        </div>
      </div>
      {currStep === totalChance && !isGameWon ? <span>Game Over!</span> : null}
      {isGameWon ? <span>You Won!</span> : null}
    </div>
  );
}
