import React from 'react'
import dalmak from './Fotor_AI__3_-removebg-preview.png';


const FoodSection2 = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center  ' id='contact'>
        {/*<img src={bgimg} alt='/' className='top-0 left-0 w-full h-96 object-cover'/>*/}
        <div className='  max-w-[1240px] mx-auto grid lg:grid-cols-2  items-center'>
             <div className='img'>
                <img src={dalmak} alt='/' />
            </div>
            <div className='text-white text-center my-4 mx-2  '> 
                <h1 className='md:text-4xl sm:text-3xl py-[16px] font-bold text-5xl'>Paneer Tikka</h1>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, 
                    tenetur. mollitia maiores nesciunt su.</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default FoodSection2;