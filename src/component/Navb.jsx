import React from "react";
import { Link } from "react-router-dom";

function Navb(props) {
  return (
    <div>
      <div id="abc">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addnotes">Add Notes</Link>
            </li>
            <li>
              <Link to="/shownotes">Show Notes</Link>
            </li>
          
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navb;
