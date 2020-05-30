import React, {useState} from 'react';
import Footer from './Components/footer';
import Body from './Components/body';
import Header from './Components/navbar';
import './App.css';
import LandingScreen from './Components/LandingScreen';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";

function App() {
  const Landing = () => {return <LandingScreen, name= />};
  const [screen, setscreen] = useState(Landing);

  function handleClick() {
      
  } 

  return (
    <div>
      <div>
        {screen}
      </div>
    </div>
  );
}

export default App;
