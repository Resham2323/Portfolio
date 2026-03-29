import React from 'react'
import About from './About.jsx'
import Navbar from '../Components/Navbar.jsx'
import Education from './Education.jsx'
import Skill from './Skill.jsx'
import Projects from './Projects.jsx'
import Footer from '../Components/Footer.jsx'

const Home = () => {
  return (
    <div className=' p-2'>
      <Navbar/>
      <About/>  
      <Skill/>
      <Projects/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default Home
