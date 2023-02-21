import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  
const [maxSum, setMaxSum] = useState(50);
const [range1, setRange1] = useState(0);
const [range2, setRange2] = useState(50);

useEffect(() => {
  console.log(maxSum, range1, range2);
})


  return (
    <>
      <div id='max-sum-holder'>
          Input max sum:- <input type="number" value={maxSum} onChange={(e) => setMaxSum(e.target.value)}/>
      </div>
      <div id='range-a-holder'>
          <input type="range" value={range1} max={maxSum - range2} onChange={(e) => setRange1(parseInt(e.target.value))}/>
          <div id="range-a-value">{range1}</div>
      </div>
      <div id='range-b-holder'>
          <input type="range" value={range2} max={maxSum - range1} onChange={(e) =>setRange2(parseInt(e.target.value))}/>
          <div id="range-b-value">{range2}</div>
      </div>
      <div id='sum'>
          {range1 + range2}
      </div>
    </>
  )
    
}


export default App;
