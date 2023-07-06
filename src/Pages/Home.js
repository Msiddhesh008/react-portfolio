import React from 'react'
import Banner from '../Components/Banner'
import Intro from '../Components/Intro'
import TechStack from '../Components/TechStack'

const Home = () => {
  return (
    <div className='max-width home'>
        <Banner />
        <Intro />
        <TechStack />
    </div>
  )
}

export default Home