import React from 'react'
import '../../css/RightNav.css'
import Searchbox from '../Rightnav-Components/Searchbox';
export const ProfileRightNav = () => {
  return (
    <div className="RightNav">
            <div className='RightComponent'>    
                <Searchbox />
                <div className="edit">
                    <a href="">Edit Profile</a>
                </div>
                <div id="follownav">
                <a href="" className='nav-link'>Following</a>
                <a href="" className='nav-link'>Followers</a> 
                </div>
            </div>
        </div>
  )
  
}


