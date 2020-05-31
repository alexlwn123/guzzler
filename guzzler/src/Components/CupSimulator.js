import React, {useState} from 'react';
import "./style/CupSimulator.css";

function CupSimulator() {
  const [isRunning, setIsRunning] = useState(false);

  function handleClick(event) {
    setIsRunning(!isRunning);
  }

  return (
    <div>
      <h2 className="p">Try to fill the glass to the safe amount to drink!</h2>
      <div className="Cup" />
      <button className="startButton" onClick={handleClick}>Start</button>
    </div>
  )
}


export default CupSimulator;
