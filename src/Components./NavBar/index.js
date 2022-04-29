import "./NavBar.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink to="/">Blake Watts</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="Skills">Skills</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
};

export default NavBar;
