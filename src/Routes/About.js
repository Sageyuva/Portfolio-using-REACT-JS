import React from 'react'
import Footer from '../Utilities/Footer'
import Introimg from '../Utilities/Introimg'
import Navbar from '../Utilities/Navbar'

const About = () => {
  return (
    <div>
       <Navbar />
       <Introimg heading="About me" text="I'am a friendly REACT JS DEVELOPER" />
       <Footer />
    </div>
  )
}

export default About