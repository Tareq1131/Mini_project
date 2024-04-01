// import React from 'react'
import { useEffect, useState } from 'react';
import './pp.css'
import {MAX,MIN} from '../../src/constants'
function ProgressBar({value = 0,  onComplete = () => {} }) {

    const [percent, setPercent] = useState(value);

    useEffect(() => {
      setPercent(Math.min(MAX,Math.max(value, MIN)));
      if (value >= MAX) {
        onComplete();
      }
    
    }, [onComplete, value]);
  return (
    <div className="progress">
      <span
       style={{
        color: percent > 49 ? "white" : "black"
      }}>
        {percent.toFixed()}%</span>
      <div  
    //   style={{ width: `${percent}%` }}
    style={{transform: `scaleX(${percent / MAX})`,
    transformOrigin: "left"}}
      role="progressbar"
      aria-valuemin={MIN}
      aria-valuemax={MAX}
      aria-valuenow={percent.toFixed()}
      />
    </div>
  )
}

export default ProgressBar
