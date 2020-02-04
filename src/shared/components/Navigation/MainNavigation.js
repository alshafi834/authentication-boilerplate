import React from "react";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const MainNavigation = props => {
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/">Authentication Boilerplate</Link>
      </h1>
      <nav>
        <Navlinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
