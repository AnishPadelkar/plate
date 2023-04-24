import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Aboutus = () => {
  return (
    <div id='about' className='w-full h-[100vh] flex justify-center' >
        <div className='  max-w-[1240px] mx-auto grid md:grid-cols-2 lg:grid-cols-2  items-center'>
           <div className=" text-white mt-12 flex flex-col  gap-4 items-center justify-center text-center ">
                       {/*} <h1 class=" text-white font-bold mx-auto max-w-12x1">       
                        <span class="text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-yellow-500"> About Us</span>
  </h1>*/}
                      <Bounce left><h1 className='text-5xl font-bold mx-auto max-w-12x1 text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-yellow-500'>About Us</h1></Bounce>
                      <p className='text-[15px]'>Plateup is a cloud kitchen that delivers home-style <br/>cooked meal's to its customers.
                    We aim to provide fresh and healthly meal's to offices in the corporate sector.<br/>Our mission is to help busy professionals stay healthy and productive by delivering nutritious meals right</p>     
           
            </div>     
            
            <div className='text-white text-center my-4 mx-2 flex flex-col gap-4  '> 
                    <Bounce right><h1 className=' text-5xl font-bold mx-auto max-w-12x1 text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-yellow-500'>Our Mission</h1></Bounce>
                    <p className='text-[15px]'>We are passionate about providing fresh, healthy, and delicious meals right at your doorstep. We're a community of food lovers who are passionate about providing a delicious, hassle-free meal experience. So, whether you're at work, school, or just too busy to cook, let us take care of the meals for you. Or if you are a busy professional looking for a convenient and nutritious meals option or simply someone who loves good food, we are here to make your day a little brighter with every delivery. Try Plateup today and taste the difference!</p>
                    
            </div>
            
         </div>
    </div>
  )
}

export default Aboutus;