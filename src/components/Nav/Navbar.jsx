import React from 'react';
import logo from './IMG_20230419_174601.png';
import Spin from 'react-reveal/Spin';
const Navbar = () => {
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
  
            <div className='z-10 flex items-center w-full relative'>
                    <Spin><img src={logo} alt='logo' className=' w-[130px] h-[130px] z-50'/></Spin>
                    <div className='left-2 text-white'>
                    <ul className='flex gap-6 '>
                    <li><div><a  href='#specials'>Our Specials</a></div></li>
                    <li><div><a href='#connect'>Connect</a></div></li>
                    </ul></div>
            </div>
    </div>
  )
}

export default Navbar;