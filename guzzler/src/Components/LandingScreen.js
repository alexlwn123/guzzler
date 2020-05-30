import React from 'react';
import Q1 from './Q1.js'
import { Route, Link } from "react-router-dom";

const LandingScreen = (props) => {
  return (
    <div style={{position: 'absolute', top:'20%', left:'50%',  transform: 'translate(-50%, -20%)'}}>
      <h1>GUZZLER</h1>
        <Link to="/q1">
          <button>
            ENTER GUZZLER 
          </button>
        </Link>
    
      <Route exact path="/q1" component={Q1} />
    </div>
  )
}


export default LandingScreen;
