import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "../assets/styles/style.css";

const HamburgerMenu = (props) => {
  return (
    <Menu right>
      <Link to="/">Home</Link>
      <Link to="/works">Works</Link>
      <Link to="/Uses">Uses</Link>
    </Menu>
  );
};

export default HamburgerMenu;
