import React from 'react'
import foodimg from './paneer malsa.png';
import './FoodSection.css';

const FoodSection = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center  ' id='contact'>
        {/*<img src={bgimg} alt='/' className='top-0 left-0 w-full h-96 object-cover'/>*/}
        <div className='  max-w-[1240px] mx-auto grid lg:grid-cols-2  items-center'>
            <div className='text-white text-center my-4 mx-2  '> 
                <h1 className='md:text-4xl sm:text-3xl py-[16px] font-bold text-5xl'>PaneerMasala</h1>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, 
                    tenetur. mollitia maiores nesciunt su.</p>
            </div>
            <div className='img'>
                <img src={foodimg} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default FoodSection