import React, { useState } from 'react'
import '../styles/App.css'

const App = () => {
  const [maxSum, setMaxSum] = useState(50)
  const [rangeA, setRangeA] = useState(0)
  const [rangeB, setRangeB] = useState(50)

  const handleRangeAChange = (event) => {
    const newValue = parseInt(event.target.value)
    const newMax = Math.min(maxSum - rangeB, 50 - rangeB)
    setRangeA(newValue)
    setMaxSum(newMax)
  }

  const handleRangeBChange = (event) => {
    const newValue = parseInt(event.target.value)
    const newMax = Math.min(maxSum - rangeA, 50 - rangeA)
    setRangeB(newValue)
    setMaxSum(newMax)
  }

  return (
    <div>
      <div id="max-sum-holder">
        <input
          type="number"
          min="1"
          max="100"
          value={maxSum}
          onChange={(event) => setMaxSum(parseInt(event.target.value))}
        />
      </div>
      <div id="range-a-holder">
        <input
          type="range"
          min="0"
          max={Math.min(maxSum, 50)}
          value={rangeA}
          onChange={handleRangeAChange}
        />
        <div id="range-a-value">{rangeA}</div>
      </div>
      <div id="range-b-holder">
        <input
          type="range"
          min="0"
          max={Math.min(maxSum, 50)}
          value={rangeB}
          onChange={handleRangeBChange}
        />
        <div id="range-b-value">{rangeB}</div>
      </div>
      <div id="sum">{rangeA + rangeB}</div>
    </div>
  )
}

export default App;
