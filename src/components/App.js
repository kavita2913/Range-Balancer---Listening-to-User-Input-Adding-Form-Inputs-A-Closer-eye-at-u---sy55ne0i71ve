import React, { useState } from 'react'
import '../styles/App.css';
import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleMaxSumChange = (event) => {
    const newMaxSum = parseInt(event.target.value);
    setMaxSum(newMaxSum);

    const newMaxB = Math.min(rangeB, newMaxSum);
    setRangeB(newMaxB);

    const newMaxA = Math.min(rangeA, newMaxB);
    setRangeA(newMaxA);
  };

  const handleRangeAChange = (event) => {
    const newRangeA = parseInt(event.target.value);
    setRangeA(newRangeA);

    const newMaxB = Math.min(maxSum - newRangeA, 50);
    setRangeB(Math.min(rangeB, newMaxB));
  };

  const handleRangeBChange = (event) => {
    const newRangeB = parseInt(event.target.value);
    setRangeB(newRangeB);

    const newMaxA = Math.min(maxSum - newRangeB, newRangeB);
    setRangeA(Math.min(rangeA, newMaxA));
  };

  return (
    <div id="max-sum-holder">
      <input
        type="number"
        defaultValue={maxSum}
        min="1"
        max="100"
        onChange={handleMaxSumChange}
      />
      <div id="range-a-holder">
        <input
          type="range"
          value={rangeA}
          max={Math.min(rangeB, maxSum)}
          onChange={handleRangeAChange}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <input
          type="range"
          value={rangeB}
          max={Math.min(50, maxSum - rangeA)}
          onChange={handleRangeBChange}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
}

export default App;
