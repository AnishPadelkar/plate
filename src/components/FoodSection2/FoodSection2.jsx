import React from 'react'
import dalmak from './Fotor_AI__3_-removebg-preview.png';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const FoodSection2 = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center  ' id='contact'>
        {/*<img src={bgimg} alt='/' className='top-0 left-0 w-full h-96 object-cover'/>*/}
        <div className='  max-w-[1240px] mx-auto flex flex-col-reverse gap-8 md:grid md:grid-cols-2 items-center'>
             <Fade left><div className='img '>
                <img src={dalmak} alt='/' />
            </div>
            </Fade>
            <div className='text-white text-center my-4 mx-2 flex flex-col gap-5 '> 
                <Fade top><h1 className='text-2xl md:text-4xl sm:text-3xl py-[16px] font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-yellow-400'>Chicken Masala</h1></Fade>
                <Slide right><p >Chicken masala is a popular Indian dish that is made with chicken and a blend of aromatic spices. The chicken is marinated in the spice blend and then cooked with tomato puree and yogurt to create a flavorful and creamy sauce. 
Proteins: 27.5g, Kcals: 372g, Carbs: 15g</p></Slide>
            </div>
            
            
        </div>
    </div>
  )
}

export default FoodSection2;