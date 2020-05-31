import React, {useState} from 'react';
import "./style/CupSimulator.css";
import Slider from "./Slider.js";
import { Link } from  "react-router-dom";

function CupSimulator(props) {
  const { material } = props;
  const [isRunning, setIsRunning] = useState(false);
    const [value, setValue] = useState(0);
    const beerStyle = {
        "height": value
    };

    function handleChange(event) {
        const { value } = event.target;
        setValue(value);
        document.documentElement.style.setProperty("--height", value);
    }

  const color = material === "Bleach" ? '#ffffd4' : material === "HCl" ? '#b5fff9' : "#f5d469";
  console.log(color, material);

  return (
    <div>
        <h2 className="p">Try to fill the glass to the safe amount of {material} to drink!</h2>
        <div className="container">
          <div className="Cup">
              <div className="beer" style={{"height": value * .9 + "%", "marginTop": 29.5-value*.95/100 * 29.5 + "vmin", "backgroundColor": color}}></div>
          </div>
         
          </div>
          <br>

          </br>
          <Slider value={value} handler={handleChange} />

          <Link to='/results'>
            <button className="submit" style={{"marginTop":"5%"}}>Submit</button>
          </Link>
          
    </div>
  )
}


export default CupSimulator;
