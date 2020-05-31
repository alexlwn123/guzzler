import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";

function Diagnostics(props) {
  const { heightFt, heightIn, material, amount } = props.data;

  function onSubmit() {

  }

  return (

      <div style={{"marginTop":"10%"}}>
      <form className="form">
        <p>How tall are you?</p>
        <input
          className="height_ft"
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
          className="height_in"
          placeholder="in"
          value={heightIn}
          onChange={props.handler} 
        />

        
        <p>Which substance do you plan to injest?</p>
        <select
          value={material}
          name="substance"
          className="substance"
          onChange={props.handler}
        >       
          <option value = "">-- Select a substance --</option>
          <option value = "water">Water</option>
          <option value = "bleach">Bleach</option>
          <option value = "gasoline">Gasoline</option>
          <option value = "hcl">Hydrochloric Acid</option>
        </select>
        <br />

        <br /> 
        <Link to='/simulator'>
          <button className='submit'>Submit</button>
        </Link>
      </form>
    </div>
  )
}


export default Diagnostics; 
