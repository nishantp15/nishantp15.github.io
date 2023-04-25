import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import ContactDetails from '../Components/ContactDetails'
import Footer from '../Components/Footer'
import SocialButton from '../Components/SocialButton'
import DummyHome from '../Components/DummyHome'
import GitHubProfile from '../Components/GitHubProfile'

const Home = () => {
  return (
    <div >
        <Navbar/>
        <DummyHome/>
        <About/>
        <Skills/>
        <Projects/>
        <ContactDetails/>
        <GitHubProfile/>
        <Footer/>
        <SocialButton/>
    </div>
  )
}

export default Home