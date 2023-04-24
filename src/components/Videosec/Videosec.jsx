import React from 'react'
import vid from './White Brown Modern Line Cooking Channel Youtube Outro        .MP4';
import './Videosec.css';

const Videosec = () => {
  return (
    <div className='main '>
         <div className="overlay"></div>
         <video src={vid} autoPlay loop muted/>
         <div className='textContainer text-white gap-4 '>
              <h1 className='text-4xl sm:text-5xl font-bold'>Hungry for success?</h1>
              <p>Let us feed your team with our tasty meals</p>
           
  
         </div>
    </div>
  )
}

export default Videosec;