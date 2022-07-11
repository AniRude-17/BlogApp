import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavbarStyle.css'
export const Navbar = (props) => {
  return (
    <div className="sidenav">
        <div className="logo">
            <Link to="/">
                <h3>{props.title}</h3>
            </Link>
        </div>
        <ul className='sidenav-list'>
            <li>
                <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li>
                <a href="" className='nav-link'>Explore</a>
            </li>
            <li>
                <a href="" className='nav-link'>Random</a>
            </li>
            <li>
                <Link to="/new-blog" className='nav-link'>Write</Link>
            </li>
            <li>
                <Link to="/user-profile" className='nav-link'>My Profile</Link>
            </li>
        </ul>
        <div className='auth'>
            <Link to='/profile' className='nav-link'>Profile</Link>
            <a href="" className='nav-link'>Login</a> |
            <a href="" className='nav-link'>Register</a> 
        </div>
    </div>
  )
}


