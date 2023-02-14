import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);
  
  const handleRangeAChange = (event) => {
    setRangeA(parseInt(event.target.value));
  };
  
  const handleRangeBChange = (event) => {
    setRangeB(parseInt(event.target.value));
  };
  
  const handleMaxSumChange = (event) => {
    const newMaxSum = parseInt(event.target.value);
    const newMaxRangeA = Math.min(rangeA, newMaxSum - rangeB);
    const newMaxRangeB = Math.min(rangeB, newMaxSum - newMaxRangeA);
    setMaxSum(newMaxSum);
    setRangeA(newMaxRangeA);
    setRangeB(newMaxRangeB);
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
          min="0"
          max={Math.min(maxSum, rangeB)}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <input
          type="range"
          value={rangeB}
          onChange={handleRangeBChange}
          min="0"
          max={Math.min(maxSum, 50)}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
}

export default App;
