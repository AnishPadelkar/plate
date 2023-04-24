import React from 'react'
import vid from './White Brown Modern Line Cooking Channel Youtube Outro        .MP4';
import './Connect.css';

const Connect = () => {
  return (
    <div className='main relative ' id='connect'>
        <div className="overlay"></div>
        <video src={vid} autoPlay loop muted/>
        <div className="textCon">
            <h1 className='text-white my-4 text-4xl sm:text-5xl md:text-6xl font-bold'>Hungry for Success?</h1>
            <p className='text-white'>Let us feed your team with our tasty meals!</p>
            <div className='relative my-4'>
                <div className="absolute -inset-1 bg-yellow-400 rounded-lg blur-md"></div>
                <a href='https://wa.link/o51p7b'><button className='relative  px-7 py-3 bg-black text-white font-bold rounded-lg' >Connect</button></a>
            </div>
        </div>
     </div>
  )
}

export default Connect;