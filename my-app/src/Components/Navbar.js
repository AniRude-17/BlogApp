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
                <Link to="/" className='nav-link'>	
                <i className="fa fa-home icon"></i>Home
                </Link>
            </li>
            <li>
                <a href="" className='nav-link'><i class="fa fa-hashtag icon"></i>Explore</a>
            </li>
            <li>
                <a href="" className='nav-link'>	
                <i className="fa fa-random icon"></i>Random</a>
            </li>
            <li>
                <Link to="/new-blog" className='nav-link'>	
                <i class="fa fa-pencil-square-o icon"></i>Write
                </Link>
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


