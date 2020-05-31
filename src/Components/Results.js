import React, { useEffect } from 'react';
import stop from "../res/stopsign.png";


function Results(props) {
  const {material} = props;
  const buzzerSound = new Audio("http://cdn.frustra.org/sounds/sound/vo/wheatley/sp_a1_wakeup_hacking12.ogg");

  useEffect(() => {
    async function playSound() {
      buzzerSound.play();
    }
    playSound();
  }, []);

  return (
    <div>
          <img src={stop} className="stop" style={{"top": "20px", "position": "relative"}} alt="STOP!" />
      <p style={{"fontSize": "50px", "color": "white", "fontFamily":"Poppins"}}><b>Never Drink {material}!!</b></p>
      <p style={{"fontSize": "25px", "color":"white", "fontFamily":"Poppins"}}><i>...You should know better.</i></p>
    </div>
  )
}


export default Results;
