import React, { useState } from 'react';
import './App.css';

function App() {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleRangeAChange = (event) => {
    setRangeA(event.target.value);
    setRangeB(maxSum - event.target.value);
  };

  const handleRangeBChange = (event) => {
    setRangeB(event.target.value);
    setRangeA(maxSum - event.target.value);
  };

  const handleMaxSumChange = (event) => {
    setMaxSum(event.target.value);
    setRangeB(maxSum - rangeA);
  };

  return (
    <div className="App">
      <div id="max-sum-holder">
        <label htmlFor="max-sum">Max Sum:</label>
        <input
          type="number"
          id="max-sum"
          name="max-sum"
          value={maxSum}
          min="0"
          max="100"
          onChange={handleMaxSumChange}
        />
      </div>
      <div id="range-a-holder">
        <label htmlFor="range-a">Range A:</label>
        <input
          type="range"
          id="range-a"
          name="range-a"
          value={rangeA}
          min="0"
          max={rangeB}
          onChange={handleRangeAChange}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <label htmlFor="range-b">Range B:</label>
        <input
          type="range"
          id="range-b"
          name="range-b"
          value={rangeB}
          min={rangeA}
          max={maxSum}
          onChange={handleRangeBChange}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
}

export default App;
