import React from 'react'
import { Link } from 'react-router-dom'

const Examples = () => {
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
    <h1>Examples </h1> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut nemo voluptatem rerum est possimus molestiae in quibusdam fugiat pariatur, 
</p>
  
    </div>  
    </div>
  )
}

export default Examples