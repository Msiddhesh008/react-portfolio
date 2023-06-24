import React from 'react'
import logo from '../Images/logo2.png'

const Navbar = () => {
  return (
    <div 
    className='ps-lg-4 pe-lg-4 pt-lg-2 pb-lg-2 ps-3 pe-3 max-width'
    id="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <span className='link d-none d-lg-block d-md-block'>About</span>
        <span className='link d-none d-lg-block d-md-block'>Skills</span>
        <span className='link d-none d-lg-block d-md-block'>Projects</span>
        <span className='link d-none d-lg-block d-md-block'>Experience</span>
                <button className="nav-btn">
                    codder();
                </button>
      </div>
    </div>
  )
}

export default Navbar