import React from "react";

import "./Navlink.css";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
