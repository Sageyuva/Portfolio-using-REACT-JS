import React from 'react'
import './Intros.css'
import { Link } from 'react-router-dom'
import Introimg from '../assets/Intro.jpg'

const Intro = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intoimg' src={Introimg} alt='Introimg' />

        </div>

        <div className='Content'>
            <p>Hello World;</p>
            <h1>Yuvaraj D</h1>
            <h2>React Developer</h2>
            <div>
                <Link to="./Project" className='btn'>
                 Projects
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Intro