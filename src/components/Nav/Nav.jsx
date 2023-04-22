import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from './IMG_20230419_174601.png';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      
      <div className='z-10'><img src={logo} alt='logo' className=' w-[130px] h-[130px] z-50'/></div>
      {/*<HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />*/}
      <div className='flex  '>
      <ul className='flex gap-6'>
        <li><div><a href='#home'>Home</a></div></li>
        <li><div><a href='#contact'>Contact</a></div></li>
      </ul>
      {/*<div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'><a href='#home'>Home</a></li>
          <li className='font-bold text-3xl p-8'><a href='#contact'>Contact</a></li>
          <li className='font-bold text-3xl p-8'><a href='#foot'>Footer</a></li>
        </ul>
      </div>*/}</div>
    </div>
  );
};

export default Nav;