import React from 'react'
import '../../css/profile.css'

export const UserProfile = () => {
  let userName='Blog User'
  let title = "A Loving Heart is the Truest Wisdom";
  let datep = "July 9, 2022";
  let tag = "Travel";
  let num = "50";

  return (
    <div className='UserProfile'>
        <img className='ProfilePic' src='http://unsplash.it/250/250?gravity=center' />
        <h2> {userName} </h2>
        <p> The quick brown fox jumps over a lazy dog </p>

        <h4> {userName +'\'s'} Blogs </h4>
        
    </div>
  )
}
