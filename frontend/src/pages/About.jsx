import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t '>
    <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
     <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
     <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
     <p>Welcome to  Carpet Shop Name, your trusted destination for exceptional carpets that bring elegance, comfort, and personality to your space. With a passion for quality and design, we have been helping customers transform their homes and offices with stunning carpets that reflect timeless beauty and enduring craftsmanship.</p>
     <p>We’re more than just a carpet shop; we’re a partner in enhancing your living or working space. Whether you’re looking for a luxurious centerpiece or a functional addition to your home, we’re here to make your experience seamless and enjoyable.Visit Carpet Shop Name and discover the perfect carpet to elevate your space. Let us help you make your house a home, one beautiful carpet at a time.</p>
     <b className='text-gray-800'>Our Mission</b>
     <p>To bring warmth, beauty, and sophistication into every home or office by offering high-quality carpets that inspire and captivate.</p>
     </div>
    </div>
    <div className='text-xl py-4'>
    <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
     <b>Quality Assurance: </b>
     <p className='text-gray-600'>Every carpet in our collection is a testament to meticulous artistry and durable materials.</p>
     </div>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
     <b>Diverse Selection: </b>
     <p className='text-gray-600'> From traditional handmade designs to modern patterns, we have something for every taste and space.</p>
     </div>
     <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
     <b>Customer-Centric Approach: </b>
     <p className='text-gray-600'>We take pride in delivering personalized service to help you find the perfect carpet that matches your vision.</p>
     </div>
    </div>
    <NewsletterBox/>
    </div>
  )
}

export default About