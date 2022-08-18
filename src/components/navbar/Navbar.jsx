import React from 'react'
import recipe from "../../assets/recipe.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <div>
            <Link to='/'><img style={{width:"100px"}} src={recipe} alt="recipe" /></Link> 
        </div>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li> 
            <li><Link to='/login'>Login</Link></li> 
            
            
        </ul>
    </nav>
  )
}

export default Navbar