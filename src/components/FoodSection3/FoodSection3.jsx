import React from 'react'

import paneer from './Fotor_AI-removebg-preview.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const FoodSection3 = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center  ' id='contact'>
        {/*<img src={bgimg} alt='/' className='top-0 left-0 w-full h-96 object-cover'/>*/}
        <div className='  max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-2  items-center'>
            <div className='text-white text-center my-4 mx-2 flex flex-col gap-4 '> 
                <Fade top><h1 className='text-2xl md:text-4xl sm:text-3xl py-[16px] font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-yellow-400'>Dal Makhni</h1></Fade>
                <Slide left ><p className='text-[14px] md:text-[15px] mx-[4px]' >Dal makhani is a popular vegetarian dish from the Punjab region of India. It is made with black urad dal and kidney beans cooked with butter, cream, and a blend of spices. It is a staple dish in many Indian restaurants and is also commonly made in Indian households for special occasions or celebrations.
 <br/>Proteins: 15g, Kcals: 597g, Carbs: 37g.</p></Slide>
            </div>
            <Fade right><div className='img'>
                <img src={paneer} alt='/' />
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default FoodSection3;