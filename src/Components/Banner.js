import React from 'react'
import console from '../Images/console-two.png'
import Navbar from './Navbar'

const Banner = () => {
  return (
    <div 
    className=''
    id='banner'>
    <Navbar />
        <div className="layer">
            <div className="row mt-5 h-lg-100 ps-lg-0 pe-lg-0 pb-lg-4 p-0">
                <div className="col-lg-6  col-12 ps-5 pt-lg-5 pt-md-4 mb-5 ps-md-0 banner-left">
                <h1>The <span style={{color:"#55efc4"}}>software engineer</span> <br /> that companies <span style={{color:"#e84393"}}>love to hire</span></h1>
                <p>Coding is a language that connects dreams with technology.</p>
                <button className="hero-btn">
                    MORE ABOUT ME
                </button>
                </div>
                <div className="col-lg-6  col-12 pb-5 banner-right">
                <img src={console} alt="console" className='console' />
                </div>
            </div>
        
        </div>

        
    </div>
  )
}

export default Banner