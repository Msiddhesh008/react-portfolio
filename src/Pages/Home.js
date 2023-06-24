import React from 'react'
import Banner from '../Components/Banner'
import Intro from '../Components/Intro'
import TechStack from '../Components/TechStack'
import NavDrawer from '../Components/NavDrawer'

const Home = () => {
  return (
    <div className='max-width'>
        <NavDrawer/>
        <Banner />
        <Intro />
        <TechStack />
    </div>
  )
}

export default Home