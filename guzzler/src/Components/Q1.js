import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

function Diagnostics(props) {
  const { heightFt, heightIn, material, amount } = props.data;

  function onSubmit() {

  }

  return (

    <div>
      <form className="form">
              <div className="card">
              <p>How tall are you?</p>
        <input className="height_ft"
          type = "number"
          min = "0"
          max = "10"
          name="height_ft"
          placeholder="ft"
          value={heightFt}
          onChange={props.handler} 
        />
        <input className="height_in"
          type = "number"
          min = "0"
          max = "12"
          name="height_in"
          placeholder="in"
          value={heightIn}
          onChange={props.handler} 
        />

        
        <p>Which substance do you plan to injest?</p>
          <select className="substance"
          value={material}
          name="substance"
          onChange={props.handler}
        >       
          <option value = "">-- Select a substance --</option>
          <option value = "water">Water</option>
          <option value = "bleach">Bleach</option>
          <option value = "gasoline">Gasoline</option>
          <option value = "hcl">Hydrochloric Acid</option>
        </select>
        <br />

        <p>How much substance do you plan to injest?</p>
        <input className="amount"
          type="number"
          name="amount"
          placeholder="(ml)"
          value={amount}
          onChange={props.handler} 
        />

        <br /> 
        <br /> 
        <Link to='/simulator'>
          <button className="submit">Submit</button>
        </Link>
        </div>
      </form>
    </div>
  )
}


export default Diagnostics; 
