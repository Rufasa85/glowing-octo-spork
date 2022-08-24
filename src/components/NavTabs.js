import React from 'react';
import {Link} from "react-router-dom"
// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

         
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/about"
          
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

         
        >
          About
        </Link>
      </li>
      <li className="nav-item">
      <Link
          to="/blog"
          
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

         
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
       <Link to = "/contact">
        Contact
       </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
