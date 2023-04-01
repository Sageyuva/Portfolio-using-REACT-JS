import React from 'react'
import Footer from '../Utilities/Footer'
import Introimg from '../Utilities/Introimg'
import Navbar from '../Utilities/Navbar'
import Projectcard from '../Utilities/Projectcard'

const Project = () => {
  return (
    <div>
        <Navbar />
        
        <Introimg heading="PROJECTS."  text="Some of my recent projects." />
        <Projectcard />
         <Footer />
    </div>
  )
}

export default Project