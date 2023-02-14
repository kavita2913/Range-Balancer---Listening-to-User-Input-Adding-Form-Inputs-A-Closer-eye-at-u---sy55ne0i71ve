
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleRangeAChange = (event) => {
    const value = parseInt(event.target.value);
    setRangeA(value);
    setRangeB(maxSum - value);
  };

  const handleRangeBChange = (event) => {
    const value = parseInt(event.target.value);
    setRangeB(value);
    setRangeA(maxSum - value);
  };

  const handleMaxSumChange = (event) => {
    const newMaxSum = parseInt(event.target.value);
    setMaxSum(newMaxSum);
    setRangeA(Math.min(rangeA, newMaxSum - rangeB));
    setRangeB(Math.min(rangeB, newMaxSum - rangeA));
  };

  return (
    <div className="App">
      <div id="max-sum-holder">
        <input type="number" value={maxSum} onChange={handleMaxSumChange} />
      </div>
      <div id="range-a-holder">
        <input type="range" value={rangeA} max={maxSum - rangeB} onChange={handleRangeAChange} />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <input type="range" value={rangeB} max={maxSum - rangeA} onChange={handleRangeBChange} />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
}

export default App;
