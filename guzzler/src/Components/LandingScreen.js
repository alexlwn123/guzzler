import React from 'react';

const LandingScreen = (props) => {
  return (
    <div style={{position: 'absolute', top:'20%', left:'50%',  transform: 'translate(-50%, -20%)'}}>
      <h1>GUZZLER</h1>
      <button onClick={props.handleClick}>ENTER GUZZLER</button>
    </div>
  )
}


export default LandingScreen;
