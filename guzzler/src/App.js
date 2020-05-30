import React, {useState} from 'react';
import Footer from './Components/footer';
import Body from './Components/body';
import Header from './Components/navbar';
import './App.css';
import LandingScreen from './Components/LandingScreen';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Diagnostics from './Components/Q1';
import Simulator from './Components/CupSimulator'

function App() {
//  const Landing = () => {return <LandingScreen, name= />};
//  const [screen, setscreen] = useState(Landing);
//
//  function handleClick() {
//      
//  } 

  return (
    <div>
      <nav>
        <Link to="/">
          <button>
            Home
          </button>
        </Link>
        <Link to="/diagnostics">
          <button>
            Diagnostics 
          </button>
        </Link>
        <Link to="/CupSimulator">
          <button>
            CupSimulator
          </button>
        </Link>
      </nav>

      <div>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/diagnostics" component={Diagnostics} />
        <Route exact path="/simulator" component={Simulator} />
      </div>
    </div>
  );
}

export default App;
