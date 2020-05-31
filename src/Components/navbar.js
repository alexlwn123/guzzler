import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

  const Style = {
    margin: "25px",
    padding: "15px"
  }

  return (
    <div>
      <nav>
        <Link to="/">
          <button style={{Style}}>
            Home
          </button>
        </Link>
        <Link to="/diagnostics">
          <button style={{Style}}>
            Diagnostics 
          </button>
        </Link>
        <Link to="/simulator">
          <button style={{Style}}>
            CupSimulator
          </button>
        </Link>
        <Link to="/results">
          <button style={{Style}}>
            Results
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default Header;
