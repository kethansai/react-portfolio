import React from 'react'
import Certification from './sections/Certification/Certification'
import Contactme  from './sections/contact/Contactme'
import Education from './sections/Education/Education'
import Experience from './sections/experience/Experience'
import Home from './sections/home/Home'
import Skills from './sections/skills/Skills'
const Body = () => {
  return (
    <div className='antialiased min-h-screen pt-16 bg-gray-100 bg-pattern'>
      <Home/>
      <Experience />
      <Certification/>
      <Skills/>
      <Education/>
      <Contactme/>
    </div> 
  )
}

export default Body