import React from 'react';
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
          required
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
          required
        />

        
        <p>Which substance do you plan to injest?</p>
        <select
          value={material}
          name="substance"
          className="substance"
          onChange={props.handler}
          required
        >       
          <option value = "">-- Select a substance --</option>
          <option value = "Bleach">Bleach</option>
          <option value = "Gasoline">Gasoline</option>
          <option value = "HCl">Hydrochloric Acid</option>
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
