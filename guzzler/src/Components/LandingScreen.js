import React from 'react';
import Diagnostics from './Q1'
import { Route, Link } from "react-router-dom";

const LandingScreen = (props) => {
  return (
    <div style={{position: 'absolute', top:'20%', left:'50%',  transform: 'translate(-50%, -20%)'}}>
      <h1>GUZZLER</h1>
        <Link to="/diagnostics">
          <button>
            ENTER GUZZLER 
          </button>
        </Link>

    </div>
  )
}


export default LandingScreen;
