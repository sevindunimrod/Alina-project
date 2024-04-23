import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {

  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
        <div className="container">

        <a href="/"><img src={require('../Images/Alina Logo Sample 01.png')} alt="logo" /></a>

        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
            <button className='nav_close' onClick={showNav}>
              <FaTimes/>
            </button>
        </nav>
  
        <button className='nav_open' onClick={showNav}>
          <FaBars/>
        </button>

        </div>
    </header>
  )
}
