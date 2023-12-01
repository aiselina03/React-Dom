import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./style.scss"

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar