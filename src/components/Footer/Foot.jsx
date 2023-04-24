import React from 'react'
import {
    
    FaFacebookSquare,
    FaLinkedin,
    FaInstagram,
    FaTwitterSquare,
  
  } from 'react-icons/fa';
import logo from './IMG_20230419_174601.png';
import Spin  from 'react-reveal/Spin';
import Bounce from 'react-reveal/Bounce';
import './Foot.css';

const Foot = () => {
  return (
    <div id='foot' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black'>
      <div>
        <Spin><div className='flex justify-center'><img src={logo} alt='logo' className=' w-[130px] h-[130px] z-50'/></div></Spin>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <Bounce bottom><div className='flex justify-between md:w-[75%] my-6'>
            <a href='https://m.facebook.com/plateupIndia/?mibextid=LQQJ4d'><FaFacebookSquare size={30} className='zoomIn'/></a>
            <a href='https://instagram.com/plateupindia?igshid=YmMyMTA2M2Y='><FaInstagram size={30} className='zoomIn' /></a>
            <a href='https://twitter.com/PlateupIndia?t=3-see_4lyU3-YTR7yId9Ow&s=09' ><FaTwitterSquare size={30} className='zoomIn'/></a>
            <a href='https://www.linkedin.com/company/plateupindia/' ><FaLinkedin size={30} className='zoomIn' /></a>
            
        </div>
        </Bounce>
        <div className="container text-left"><p className='text-grey-500'>Copyright &#169; plateup</p></div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
      <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'><a href='#home'>Home</a></li>
            <li className='py-2 text-sm'><a href='#specials'>Our Special</a></li>
            <li className='py-2 text-sm'><a href='#about'>About Us</a></li>
            <li className='py-2 text-sm'><a href='#connect'>Connect Us</a></li>
            
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Connect</h6>
        <ul>
            
            <li className='py-2 text-sm'><a href='mailto:hello@plateup.in'>hello@plateup.in</a></li>
            <li className='py-2 text-sm'><a href='https://instagram.com/plateupindia?igshid=YmMyMTA2M2Y='>Instagram</a></li>
            <li className='py-2 text-sm'><a href='https://m.facebook.com/plateupIndia/?mibextid=LQQJ4d'>Facebook</a></li>
        </ul>
    </div>
    {/* <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div> */}
    
    <div>
        <h6 className='font-medium text-gray-400'>Contact</h6>
        <ul>
          <li className='py-2 text-sm'><a href='https://wa.link/o51p7b'>WhatsApp</a></li>
          <li className='py-2 text-sm'><a href='tel:7304399728'>+91 7304399728</a></li>
        </ul>
    </div>
      </div>
    
    </div>

  )
}

export default Foot