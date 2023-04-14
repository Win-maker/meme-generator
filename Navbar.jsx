import React from 'react'
import logo from '../images/troll-face.png'
import './NavbarStyle.css'
const Navbar = () => {
  return (
      <header className='navbar'>
          <img src={logo} className='logo' />
          <h2 className='navbar-title'>Meme Generator</h2>
    </header>
  )
}

export default Navbar