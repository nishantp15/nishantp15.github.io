import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import ContactDetails from '../Components/ContactDetails'
import Footer from '../Components/Footer'
import SocialButton from '../Components/SocialButton'
import Resume from '../Components/Resume'
const Home = () => {
  return (
    <div id="home">
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <ContactDetails/>
        <Resume/>
        <Footer/>
        <SocialButton/>
    </div>
  )
}

export default Home