import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css';

export default function Navbar() {
  return (
    <nav className='nav-container'>
        <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
        </div>
        <div></div>
    </nav>
  )
}
