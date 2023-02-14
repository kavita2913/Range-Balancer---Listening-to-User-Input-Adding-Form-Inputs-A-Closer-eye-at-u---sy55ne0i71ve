import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  // Update range A and max attribute based on range B value
  const handleRangeBChange = (event) => {
    const newRangeB = parseInt(event.target.value);
    setRangeB(newRangeB);
    setRangeA(Math.min(rangeA, maxSum - newRangeB));
  };

  // Update range B and max attribute based on range A value
  const handleRangeAChange = (event) => {
    const newRangeA = parseInt(event.target.value);
    setRangeA(newRangeA);
    setRangeB(Math.min(rangeB, maxSum - newRangeA));
  };

  return (
    <div id="max-sum-holder">
      <label htmlFor="max-sum-input">Max Sum:</label>
      <input
        id="max-sum-input"
        type="number"
        min="0"
        value={maxSum}
        onChange={(event) => setMaxSum(parseInt(event.target.value))}
      />

      <div id="range-a-holder">
        <label htmlFor="range-a-input">Range A:</label>
        <input
          id="range-a-input"
          type="range"
          min="0"
          max={maxSum - rangeB}
          value={rangeA}
          onChange={handleRangeAChange}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>

      <div id="range-b-holder">
        <label htmlFor="range-b-input">Range B:</label>
        <input
          id="range-b-input"
          type="range"
          min="0"
          max={maxSum - rangeA}
          value={rangeB}
          onChange={handleRangeBChange}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>

      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
};

export default App;
