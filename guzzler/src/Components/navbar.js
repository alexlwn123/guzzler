import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {

  return (
    <div>
      <nav>
        <ul className="items">
          <li>
            <Link to="/">
              <button>
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/diagnostics">
              <button>
                Diagnostics 
              </button>
            </Link>
            </li>
          <li>
            <Link to="/simulator">
              <button>
                CupSimulator
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
