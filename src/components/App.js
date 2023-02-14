
import React, { useState } from 'react'
import '../styles/App.css';
import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleRangeAMove = (event) => {
    const newRangeA = Number(event.target.value);
    const newRangeBMax = maxSum - newRangeA;
    setRangeA(newRangeA);
    setRangeB(Math.min(rangeB, newRangeBMax));
  };

  const handleRangeBMove = (event) => {
    const newRangeB = Number(event.target.value);
    const newRangeAMax = maxSum - newRangeB;
    setRangeB(newRangeB);
    setRangeA(Math.min(rangeA, newRangeAMax));
  };

  const handleMaxSumChange = (event) => {
    const newMaxSum = Number(event.target.value);
    setMaxSum(newMaxSum);
    setRangeA(Math.min(rangeA, newMaxSum - rangeB));
    setRangeB(Math.min(rangeB, newMaxSum - rangeA));
  };

  return (
    <div>
      <div id="max-sum-holder">
        <input
          type="number"
          min="0"
          step="1"
          value={maxSum}
          onChange={handleMaxSumChange}
        />
      </div>

      <div id="range-a-holder">
        <input
          type="range"
          min="0"
          max={rangeB === 0 ? 0 : maxSum - rangeB}
          value={rangeA}
          onChange={handleRangeAMove}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>

      <div id="range-b-holder">
        <input
          type="range"
          min="0"
          max={rangeA === 0 ? 0 : maxSum - rangeA}
          value={rangeB}
          onChange={handleRangeBMove}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>

      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
};

export default App;
