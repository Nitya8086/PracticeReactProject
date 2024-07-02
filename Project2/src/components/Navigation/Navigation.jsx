import React from 'react'
import classes from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={`${classes.navigation} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="do some coding" />
      </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Navigation
