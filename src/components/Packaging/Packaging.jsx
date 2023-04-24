import React from 'react'
import vid from './food delivery.mp4';
import './Packaging.css';

const Packaging = () => {
  return (
    <div id='packaging' className='w-full h-[100vh] flex justify-center'>
        <div className='max-w-[1240px] mx-auto grid  md:grid-cols-2 lg:grid-cols-2  items-center '>
            <div className='video '>
                <video src={vid} autoPlay loop muted className=' '/>
            </div>
            <div className='text-white text-center my-6 mx-5  '> 
                
                     {/*<h1 className='md:text-4xl sm:text-3xl py-[16px] font-bold text-5xl'>Hungry for sucess?</h1>*/}
                    <p className='text-[14px] md:text[20px] ' >We promise ourselves on providing fast, warm, and high-quality food delivered straight to your workplace. But we don't just focus on the food - we also pay close attention to the packaging. We understand that the packaging is just as important as the food itself. That's why we have a team dedicated to ensuring that your meals are packed with care and attention to detail. We want your food to arrive to you in the same condition it left our kitchen, which is why we use only the best packaging materials.</p>
                    
            </div>
        </div>
    </div>   )
}

export default Packaging;