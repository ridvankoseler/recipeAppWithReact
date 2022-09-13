import React, { useState } from "react";
import recipe from "../../assets/recipe.png";
import { Link } from "react-router-dom";
import Nav, { Menu, MenuLink ,Ul } from "./Navbar.styled";
import { FcAddDatabase } from "react-icons/fc";

const Navbar = () => {
  const [show, setShow] = useState(false)
  
  

  return (
    <Nav justify='space-between' wrap='wrap'>
        <Link to='/'>
          <img style={{ width: "80px" ,borderRadius:"20px"}} src={recipe} alt='recipe' />
        </Link>
        <Menu >
          <span onClick={()=>setShow(!show)}><FcAddDatabase/></span>
        </Menu>
      <Ul show={show} onClick={()=>setShow(false)}>
        {/* burada bowling kullanarak setshow false yukarıya doğru yakladık bowling oluyor */}
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='about'>About</MenuLink>
        <MenuLink to='register'>Register</MenuLink>
        <MenuLink to='login' onClick={()=>sessionStorage.clear()} >Logout</MenuLink>
      </Ul>
    </Nav>
  );
};

export default Navbar;
