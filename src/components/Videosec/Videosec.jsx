import React from 'react'
import vid from './White Brown Modern Line Cooking Channel Youtube Outro        .MP4';
import './Videosec.css';

const Videosec = () => {
  return (
    <div className='main relative'>
         <div className="overlay"></div>
         <video src={vid} autoPlay loop muted/>
         <div className='textContainer text-white gap-4 '>
              <h1 className='text-4xl sm:text-5xl font-bold'>Hungry for success?</h1>
              <p>Lorem ipsum dolor, sit ammque unde eveniet!</p>
           <div className='relative '>
              <div className="absolute -inset-1 bg-yellow-400 rounded-lg blur-md"></div>
              <button className='relative  px-7 py-3 bg-black text-white font-bold rounded-lg' >Connect </button>
            </div>
  
         </div>
    </div>
  )
}

export default Videosec;