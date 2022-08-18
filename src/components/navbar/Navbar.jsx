import React from "react";
import recipe from "../../assets/recipe.png";
import { Link } from "react-router-dom";
import Nav, { MenuLink } from "./Navbar.styled";

const Navbar = () => {
  return (
    <Nav justify='space-between' wrap='wrap'>
      <div>
        <Link to='/'>
          <img style={{ width: "100px" }} src={recipe} alt='recipe' />
        </Link>
      </div>
      <ul>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to='/register'>Register</MenuLink>
        <MenuLink to='/login'>Login</MenuLink>
      </ul>
    </Nav>
  );
};

export default Navbar;
