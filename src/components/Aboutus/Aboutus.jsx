import React from 'react'


const Aboutus = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center' id='contact'>
        <div className='  max-w-[1240px] mx-auto grid lg:grid-cols-2  items-center'>
           <div className=" flex items-center justify-center text-center text-5xl md:7xl">
                        <h1 class=" text-white font-bold mx-auto max-w-12x1">       
                        <span class="text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-yellow-500"> About Us</span>
                        </h1>
            </div> 
            <div className='text-white text-center my-4 mx-2 text-2xl '> 
                
                    
                   
                {/*<h1 className='md:text-4xl sm:text-3xl py-[16px] font-bold text-5xl'>Hungry for sucess?</h1>*/}
                    <p >Plateup is a cloud kitchen that delivers home-style <br/>cooked meal's to its customers.
                    We aim to provide fresh and healthly meal's to offices in the corporate sector.<br/>Our mission is to help busy professionals stay healthy and productive by delivering nutritious meals right</p>
                    
            </div>
            {/*<div className=" text-center">
                    <h1 className='text-white text-6xl font-bold justify-center '>About Us</h1>
            </div>
  */}       
            
    
        </div>
    </div>
  )
}

export default Aboutus;