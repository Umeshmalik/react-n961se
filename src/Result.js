import React, { useState, useEffect } from 'react';
import './style.css';

const Result = ({ choosenColor = {}, actualAnswer = [], setIsGameWon }) => {
  const total = 4;
  const colorIndictor = ['green', 'yellow', 'red'];
  const [ans, setAns] = useState(['white', 'white', 'white', 'white']);
  useEffect(() => {
    calculate();
  }, []);
  const calculate = () => {
    const cloneAns = JSON.parse(JSON.stringify(actualAnswer));
    const colorMatching = Object.values(choosenColor).reduce((acc, curr) => {
      if (cloneAns.includes(curr)) {
        cloneAns[cloneAns.indexOf(curr)] = null;
        return acc + 1;
      }
      return acc;
    }, 0);
    const posAndColorMatch = actualAnswer.reduce(
      (acc, curr, idx) => (curr === choosenColor[idx] ? acc + 1 : acc),
      0
    );
    if (posAndColorMatch === total) {
      setIsGameWon(true);
    }
    const ans = [
      ...Array.from({ length: posAndColorMatch }, () => colorIndictor[0]),
      ...Array.from(
        { length: colorMatching - posAndColorMatch },
        () => colorIndictor[1]
      ),
      ...Array.from({ length: total - colorMatching }, () => colorIndictor[2]),
    ];
    setAns(ans);
  };
  return (
    <div className="result">
      <div className="grid">
        {ans.map((color, idx) => (
          <div
            key={idx}
            className="hint"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Result;
