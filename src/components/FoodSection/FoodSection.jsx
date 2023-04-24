import React from 'react'
import foodimg from './paneer malsa.png';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import './FoodSection.css';

import './FoodSection.css';

const FoodSection = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center  ' id='specials'>
        {/*<img src={bgimg} alt='/' className='top-0 left-0 w-full h-96 object-cover'/>*/}
        <div className='  max-w-[1240px] mx-auto grid  md:grid-cols-2 items-center'>
            <div className='text-white text-center my-4 mx-4 flex flex-col gap-5 '> 
                <Fade top ><h1 className=' text-2xl md:text-4xl sm:text-3xl py-[16px] font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-yellow-400'>Paneer Masala</h1></Fade>
                <Slide left><p  className='text-[15px] '>Paneer masala is a popular Indian vegetarian dish made with paneer cooked in a spiced tomato and onion-based gravy. Paneer masala is a flavorful and satisfying dish that is enjoyed by many people around the world.
<br/>Proteins: 18g, Kcals: 433g, Carbs: 11g</p></Slide>
            </div>
            
            <Fade right>
              <div className='img'>
                  <img src={foodimg} alt='/' />
              </div>
            </Fade>
        </div>
    </div>
  )
}

export default FoodSection