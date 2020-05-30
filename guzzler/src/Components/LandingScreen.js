import React from 'react';
import Diagnostics from './Q1'
import { Route, Link } from "react-router-dom";

const LandingScreen = (props) => {
  return (
    <div>
      <h1 className="titleCard">GUZZLER</h1>
        <Link to="/diagnostics">
          <button className="welcomeButton">
            ENTER GUZZLER 
          </button>
        </Link>

    </div>
  )
}


export default LandingScreen;
