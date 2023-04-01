import React from 'react'
import './Projectcard.css'
import newsapi from '../assets/newsapi.png'
import ecom from '../assets/ecom.jpg'
import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
        <div className="project-card">
                <img className='N' src={newsapi} alt=''></img>
                <h2 className='project-title'>News Website using API</h2>
                <div className="pro-info">
                    <p>A News website based on API gets real time news and refreshes itself</p>
                        <div className="pro-btns">
                            <NavLink to="https://github.com/Sageyuva/news-Api" className='btn'>View and source code</NavLink>
                        </div>
                </div>
            </div>
            <div className="project-card">
                <img className='N' src={ecom} alt=''></img>
                <h2 className='project-title'>E-commerce website UI</h2>
                <div className="pro-info">
                    <p>A E-commerce website UI for beginners</p>
                        <div className="pro-btns">
                            <NavLink to="https://github.com/Sageyuva/final" className='btn'>View and source code</NavLink>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard