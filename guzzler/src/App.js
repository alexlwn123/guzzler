import React, {useState} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import Loading from "./Components/Loading";
import Header from "./Components/navbar.js";

function App() {
  
  const LandingScreen = loadable(() => import("./Components/LandingScreen.js"), {fallback: <Loading />});
  const Simulator = loadable(() => import("./Components/CupSimulator.js"), {fallback: <Loading />});
  const Diagnostics = loadable(() => import("./Components/Q1.js"), {fallback: <Loading />});

  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [amount, setAmount] = useState("");

  const items={'heightFt': heightFt, 'heightIn': heightIn, 'weight': weight, 'material': material, 'amount': amount};

  function handleChange(event) {
    const {name, value, checked, type} = event.target;
    if (name === "height_ft") setHeightFt(value);
    if (name === "height_in") setHeightIn(value);
    if (name === "weight") setWeight(value);
    if (name === "substance") setMaterial(value);
    if (name === "amount") setAmount(value);
  }  

  return (
    <body>
      <Header />
      <Switch>
        <Route exact path="/diagnostics"> <Diagnostics handler={handleChange} data={items} /></Route>
        <Route exact path="/simulator" component={Simulator} />
        <Route exact path="/" component={LandingScreen} />
      </Switch>
    </body>
  );
}

export default App;
