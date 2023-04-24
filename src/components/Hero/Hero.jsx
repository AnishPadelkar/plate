import React from 'react'
import img from './Untitled design (1).png';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className='w-full h-screen ' id='home'>
      <img
        className='top-0 left-0 w-full h-screen object-cover '
        src={img}
        alt='/'
  />
      {/*<div className='bg-black z-5 absolute top-0 left-0 w-full h-screen' />*/}
      <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-white '>
        <div className='sm:left-[5%] md:left-[10%] max-w-[1100px] m-auto absolute p-4 justify-center'>
          <p>All Inclusive</p>
          <Fade left >
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            DON'T COOK  <br/> JUST LOOK!</h1></Fade>
          
          
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            2 Lakhs+ Meals served food service at your fingertips
          </p>
          {/*<button className='bg-white text-black '>Reserve Now</button>*/}
        </div>
      </div>
    </div>
  )
}

export default Hero;