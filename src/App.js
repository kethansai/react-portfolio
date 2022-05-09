import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navigation/Navbar'
import Body from './components/Body/Body'
const App = () => {
  return (
    <div className='portfolio scroll-smooth bg-theme-dark-blue select-none'>
      <Navbar />
      <Body/>
      <Footer/>
    </div>
  )
}

export default App