import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);
  const [maxRangeA, setMaxRangeA] = useState(0);
  const [maxRangeB, setMaxRangeB] = useState(50);

  const handleRangeAChange = (event) => {
    const newRangeA = parseInt(event.target.value);
    setRangeA(newRangeA);
    setMaxRangeB(maxSum - newRangeA);
  };

  const handleRangeBChange = (event) => {
    const newRangeB = parseInt(event.target.value);
    setRangeB(newRangeB);
    setMaxRangeA(maxSum - newRangeB);
  };

  const handleMaxSumChange = (event) => {
    const newMaxSum = parseInt(event.target.value);
    setMaxSum(newMaxSum);
    setMaxRangeA(Math.min(rangeA, newMaxSum - rangeB));
    setMaxRangeB(Math.min(rangeB, newMaxSum - rangeA));
  };

  return (
    <div>
      <div id="max-sum-holder">
        <input
          type="number"
          value={maxSum}
          onChange={handleMaxSumChange}
          min="0"
          step="1"
        />
      </div>
      <div id="range-a-holder">
        <input
          type="range"
          value={rangeA}
          onChange={handleRangeAChange}
          max={maxRangeA}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <input
          type="range"
          value={rangeB}
          onChange={handleRangeBChange}
          max={maxRangeB}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
};

export default App;
