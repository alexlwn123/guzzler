import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

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
    </div>
  )
}

export default Header;
