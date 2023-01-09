import './style.css'
import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'
import {AnimatePresence, motion} from 'framer-motion'
const Home = () => {

  const [letterClass, setLetterClass] = useState("text-animate")

  
  const nameArray = ['h', 'i', 'b', 'r',  'a', 'j']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

   useEffect(()=>
   {
       setTimeout(() => {
        setLetterClass('text-animate-hover')
      },4000 );
   }, [])

  return (
    <>
   <AnimatePresence>
    <motion.div className='container home-page' 
     
    
     exit={{y:"-100vw"}}
     transition={{duration:2}}
      
    >
      <div className="text-zone">
        <h1>

        <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

        <img src={LogoTitle} alt="developer" />
        
        <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
        </h1>

        <h2>Full-Stack Developer / React Expert </h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
      <Logo />
    </motion.div>
    <Loader type='pacman' />
    </AnimatePresence>

    </>
  )
}

export default Home
