import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
     <ul>
        <li id='home'>
            <Link to={'/'}>Home</Link>
            </li>
        <li id='examples'>
            <Link to={'/examples'}>Examples</Link>
            </li>
        <li id='contact'>
            <Link to={'/contact'}>Contact</Link>
            </li>
            <li id='about'>
            <Link to={'/about'}>About</Link>
            </li>
     </ul>  
     <div className="details">
    <h1>About</h1> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        di obcaecati eveniet error esse reprehenderit, 
        voluptatum ipsam nulla repellat at, earum maxime! Odio dicta voluptatibus aliquam qui!</p>
  
    </div> 
    </div>
  )
}

export default About