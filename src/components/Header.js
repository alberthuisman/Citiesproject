import React from 'react'

export default function Header(props) {
  return (
    <div className='header-container'>
      <div className='nav-container'>
        <a href="/">Home</a>
        <a href="/contactus">Contact Us</a>
        <a href="/aboutus">About Us</a>
      </div>
        <div className='profile-container'>
          <img className='profile-image' src={props.user.avatarUrl} alt="profile"/>
          <p>{props.user.firstName}</p>
        </div>
    </div>
  )
}
