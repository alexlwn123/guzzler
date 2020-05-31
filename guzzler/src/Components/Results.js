import React from 'react';
import stop from "../res/stopsign.png"


function Results(props) {
  const {material} = props;
  return (
    <div>
      <img src={stop} style={{"height": "200px", "width": "200px"}} alt="STOP!" />
      <p>Never Drink {material}!!</p>
      <p>You should know better.</p>
    </div>
  )
}


export default Results;
