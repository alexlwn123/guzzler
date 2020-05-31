import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

function Diagnostics(props) {
  const { heightFt, heightIn, material, amount } = props.data;

  function onSubmit() {

  }

  return (

    <div>
      <form>
        <p>How tall are you?</p>
        <input
          type = "number"
          min = "0"
          max = "10"
          name="height_ft"
          placeholder="ft"
          value={heightFt}
          onChange={props.handler} 
        />
        <input
          type = "number"
          min = "0"
          max = "12"
          name="height_in"
          placeholder="in"
          value={heightIn}
          onChange={props.handler} 
        />

        
        <p>Which substance do you plan to injest?</p>
        <select
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
        <input
          type="number"
          name="amount"
          placeholder="(ml)"
          value={amount}
          onChange={props.handler} 
        />

        <br /> 
        <br /> 
        <Link to='/simulator'>
          <button>Submit</button>
        </Link>
      </form>
    </div>
  )
}


export default Diagnostics; 
