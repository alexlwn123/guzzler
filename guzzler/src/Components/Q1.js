import React, { useState } from 'react';

function Diagnostics() {
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [amount, setAmount] = useState("");
  
  function handleChange(event) {
    const {name, value, checked, type} = event.target;
    if (name === "height_ft") setHeightFt(value);
    if (name === "height_in") setHeightIn(value);
    if (name === "weight") setWeight(value);
    if (name === "substance") setMaterial(value);
    if (name === "amount") setAmount(value);
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
          onChange={handleChange} 
        />
        <input
          type = "number"
          min = "0"
          max = "12"
          name="height_in"
          placeholder="in"
          value={heightIn}
          onChange={handleChange} 
        />

        
        <p>Which substance do you plan to injest?</p>
        <select
          value={material}
          name="substance"
          onChange={handleChange}
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
          onChange={handleChange} 
        />
    
      </form>
    </div>
  )
}


export default Diagnostics; 
