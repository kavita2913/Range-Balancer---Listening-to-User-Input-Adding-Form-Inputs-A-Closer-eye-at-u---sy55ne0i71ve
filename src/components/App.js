import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleRangeAChange = (event) => {
    const value = parseInt(event.target.value);
    const newMax = maxSum - rangeB;
    if (value > newMax) {
      setRangeA(newMax);
    } else {
      setRangeA(value);
    }
  };

  const handleRangeBChange = (event) => {
    const value = parseInt(event.target.value);
    const newMax = maxSum - rangeA;
    if (value > newMax) {
      setRangeB(newMax);
    } else {
      setRangeB(value);
    }
  };

  const handleMaxSumChange = (event) => {
    const newMaxSum = parseInt(event.target.value);
    const newMaxA = Math.min(rangeA, newMaxSum - rangeB);
    const newMaxB = Math.min(rangeB, newMaxSum - newMaxA);
    setMaxSum(newMaxSum);
    setRangeA(newMaxA);
    setRangeB(newMaxB);
  };

  return (
    <div className="App">
      <div id="max-sum-holder">
        <input type="number" defaultValue={maxSum} onChange={handleMaxSumChange} />
      </div>
      <div id="range-a-holder">
        <input type="range" defaultValue={rangeA} max={maxSum - rangeB} onChange={handleRangeAChange} />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
       
