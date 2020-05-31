import React, { useEffect } from 'react';
import stop from "../res/stopsign.png";


function Results(props) {
  const {material} = props;
  const buzzerSound = new Audio("http://cdn.frustra.org/sounds/sound/vo/wheatley/sp_a1_wakeup_hacking12.ogg");

  useEffect(() => buzzerSound.play(), []);

  return (
    <div>
      <img src={stop} style={{"height": "300px", "width": "300px", "top": "20px", "position": "relative"}} alt="STOP!" />
      <p style={{"fontSize": "50px", "color": "black"}}><b>Never Drink {material}!!</b></p>
      <p style={{"fontSize": "25px"}}>...You should know better.</p>
    </div>
  )
}


export default Results;
