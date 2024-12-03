import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col  gap-14 my-10 mt-40 text-sm'>
      {/* Main Content */}
      <div className='sm:grid grid-cols-[3fr_1fr_1fr] gap-14 '>
        <div>
          <img src={assets.logo2} alt="" className='mb-5 w-40' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Discover premium carpets that combine style, comfort, and quality. From timeless classics to modern designs, we bring warmth and elegance to your space. Shop sustainably crafted rugs and enjoy exceptional service every step of the way.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium my-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>

            <Link to='/'><p>Home</p></Link>
            <Link to='/collection'><p>Collections</p></Link>
            <Link to='/about'><p>About</p></Link>
            <Link to='/contact'><p>Contact</p></Link>
              
       
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium my-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+998-91-123-23-23</li>
            <li>carpetshopuz@gmail.com</li>
          
            <li> <div className=''>
                <a href="https://t.me/carpetshopp1" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-800'>
                  <i className="fab fa-telegram"></i>Telegram
                </a></div></li>
          
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr className='my-5' />
        <p className='py-5 text-sm text-center'>Copyright 2024@ carpetshop.uz - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
