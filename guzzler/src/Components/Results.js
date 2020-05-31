import React from 'react';
import stop from "../res/stopsign.png"


function Results(props) {
  const {material} = props;
  return (
    <div>
      <img src={stop} style={{"height": "200px", "width": "200px"}} alt="STOP!" />
      <p style={{"font-size": "50px", "color": "black"}}><b>Never Drink {material}!!</b></p>
      <p style={{"font-size": "25px"}}>...You should know better.</p>
    </div>
  )
}


export default Results;
