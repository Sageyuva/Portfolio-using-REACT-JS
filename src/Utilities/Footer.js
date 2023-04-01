import './Footers.css'
import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>

        <div className='left'>
          <div className='phone'>
            <h2><FaPhone size={20} style={{color:'white', marginRight:'2rem' , marginLeft:'4rem'}}/>9686396288</h2>
          </div>
          <div className='mail'>
            <h2><FaMailBulk size={20} style={{color:'white', marginRight:'2rem' , marginLeft:'4rem'}}/>Yuvarajdhammure@gmail.com</h2>
          </div>
        </div>
        <div className='right'>
            <h4>About The Developer</h4>
            <p>This is me Yuvaraj.D a tech freak & react JS developer. I enjoy coding and design challenges. </p>
            <div className='social'>
                <div>
                  <a href="https://www.linkedin.com/in/yuvaraj-dhammure-7bba2a238/"><FaLinkedin size={20} style={{color:'blue', marginLeft:'2rem'}}/></a>
              <a href="https://www.instagram.com/yuvaraj_dhammure_/"><FaInstagram size={20} style={{color:'red', marginLeft:'2rem'}}/></a>  
                <a href="https://twitter.com/yuvarajdhammure"><FaTwitter size={20} style={{color:'blue',  marginLeft:'2rem'}}/></a>
               <a href="https://github.com/Sageyuva"><FaGithub size={20} style={{color:'white', marginLeft:'2rem'}}/></a> 
                <a href="https://www.facebook.com/yuvaraj.dhammure"><FaFacebook size={20} style={{color:'blue',  marginLeft:'2rem'}}/></a>
                </div>
            </div>
            
        </div>


        </div>
        
        <center>
                    <div><h2>© Reserved By Yuvaraj 2023</h2></div>
                </center>
    </div>
  )
}

export default Footer