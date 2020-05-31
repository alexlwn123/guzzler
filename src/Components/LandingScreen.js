import React, { useEffect } from 'react';
import Diagnostics from './Q1'
import { Route, Link } from "react-router-dom";
import logo from '../res/Logo.png';




const LandingScreen = (props) => {
    const sodaCan = new Audio("http://www.orangefreesounds.com/wp-content/uploads/Kuglice/free-download-mp3.jpg");

    useEffect(() => {
        async function playSound() {
            sodaCan.play();
        }
        playSound();
    }, []);

  return (
    <div>
         
          <img src={logo} alt="Logo" style={{ "height": "500px" , "margin-top": "5%"}} />
          <br/>
        <Link to="/diagnostics">
                <button className="welcomeButton">
            ENTER GUZZLER 
          </button>
        </Link>

    </div>
  )
}


export default LandingScreen;
