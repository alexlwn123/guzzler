import React, {useState} from 'react';
import "./style/CupSimulator.css";
import Slider from "./Slider.js"

function CupSimulator() {
  const [isRunning, setIsRunning] = useState(false);
    const [value, setValue] = useState(0);
    const beerStyle = {
        "height": value
    };


    function handleChange(event)
    {
        const { value } = event.target;
        setValue(value);
        document.documentElement.style.setProperty("--height", value);
    }

  function handleClick(event) {
    setIsRunning(!isRunning);
  }

  return (
    <div>
          <h2 className="p">Try to fill the glass to the safe amount to drink!</h2>
        <div className="container">
          <div className="Cup">
                  <div className="beer" style={{"height": value * .9 + "%", "marginTop": 29.5-value*.95/100 * 29.5 + "vmin"}}></div>
              </div>
         
          </div>
          <br>

          </br>
          <Slider value={value} handler={handleChange} />

          <button className="submit" style={{"marginTop":"5%"}}>Submit</button>
          
    </div>
  )
}


export default CupSimulator;
