import React from 'react'
import HeroSection from '../components/Herosection'
import ServicesSection from '../components/ServicesSection'
import MissionsSolution from '../components/MissionsSolution'
import CommitmentSection from '../components/CommitmentSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <MissionsSolution/>
      <CommitmentSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
