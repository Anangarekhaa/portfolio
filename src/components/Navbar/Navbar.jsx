import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <div className='Desktopmenu'>
          <Link className="desktopItem" to="home"spy={true}smooth={true}offset={-70}duration={500}>Home</Link>
          <Link className="desktopItem" to="about"spy={true}smooth={true}offset={-70}duration={500}>About</Link>
          <Link className="desktopItem" to="achievements"spy={true}smooth={true}offset={-70}duration={500}>Achievements</Link>
      </div>
      <Link to="contact" smooth={true} duration={500}>
      <button className='contactbtn'>
          Contact 
      </button>
      </Link>
    </nav>


  )
}

export default Navbar