import React from 'react'
import '../css/NavbarStyle.css'
export const Navbar = (props) => {
  return (
    <div className="sidenav">
        <div className="logo">
            <a href="">
                <h3>{props.title}</h3>
            </a>
        </div>
        <ul className='sidenav-list'>
            <li>
                <a href="" className='nav-link'>Home</a>
            </li>
            <li>
                <a href="" className='nav-link'>Explore</a>
            </li>
            <li>
                <a href="" className='nav-link'>Random</a>
            </li>
            <li>
                <a href="" className='nav-link'>Write</a>
            </li>
        </ul>
        <div className='auth'>
            <a href="" className='nav-link'>Login</a> |
            <a href="" className='nav-link'>Register</a> 
        </div>
    </div>
  )
}


