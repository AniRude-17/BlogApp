import React from 'react'
import '../../css/profile.css'

export const UserProfile = () => {
  return (
    <div className='UserProfile'>
        <img className='ProfilePic' src='http://unsplash.it/250/250?gravity=center' />
        <h2> Blog User</h2>
        <h4> A quick brown fox jumps over the lazy dog </h4>
    </div>
  )
}
