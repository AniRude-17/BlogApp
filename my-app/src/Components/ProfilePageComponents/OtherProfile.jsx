import React from 'react'

export const OtherProfile = () => {
  return (
    <div className='UserBox'>
        <img src='http://unsplash.it/250/250?gravity=center' className='OtherProfilePic' />
        <p className='OtherName'> The Name </p>
        <button type='button'> Follow</button>
    </div>
  )
}
