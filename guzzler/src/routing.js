import React from 'react';
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";

const Routing = () => {
  <Router>
    <div>
      <ul>
        <li><link to="/">Home</Link></li>
        <li><link to="/q1">Question 1</Link></li>
        <li><link to="/CupSimulator">Cup Simulator</Link></li>
        <li><link to="/">Home</Link></li>
      </ul>
      <Route exact path="/" componen={Home} />
      <Route exact path="/" componen={Home} />
      <Route exact path="/" componen={Home} />
    </div>
}
