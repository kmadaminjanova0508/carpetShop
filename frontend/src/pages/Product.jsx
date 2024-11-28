import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

  const {productId} = useParams();
  const {products, currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size,setSize] = useState();

  
  const fetchProductData = async () => {

    products.map((item)=>{
     if (item._id === productId) {
      setProductData(item)
      setImage(item.image[0])
 
      
      return null;
     }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* ---------Product Data --------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      {/*-------- Product Images ------- */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
        {
          productData.image.map((item,index)=> (
            <img onClick={()=> setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
          ))
        }
        </div>
       <div className='w-full sm:w-[80%]'>
        <img className='w-full h-auto' src={image} alt="" />
       </div>
      </div>
    {/* -----Product Info ------ */}
    <div className='flex-1'>
     <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
     <div className='flex items-center gap-1 mt-2'>
      <img src={assets.star_icon} alt="" className='w-3 5' />
      <img src={assets.star_icon} alt="" className='w-3 5' />
      <img src={assets.star_icon} alt="" className='w-3 5' />
      <img src={assets.star_icon} alt="" className='w-3 5' />
      <img src={assets.star_dull_icon} alt="" className='w-3 5' />
      <p className='pl-2'>(122)</p>
      </div>
      <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
      <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
      <div className='flex flex-col gap-4 my-8'>
        <p>Select Size</p>
        <div className='flex gap-2'>
       {productData.sizes.map((item,index)=> (
        <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : '' } `} key={index}>{item}</button>
       ))}
        </div>
      </div>
      <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>ADD TO CART</button>
      <hr className='mt-8 sm:w-4/5' />
      <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
      <p>100% Original product.</p>
      <p>Cash on delivery is available.</p>
      <p>Easy return and exchange policy within 7 days.</p>
      </div>
    </div>
      </div>
       
       {/* Discription & Review Section */}
<div className='mt-20'>
  <div className='flex'>
   <b className=' border px-5 py-3 text-sm'>Desription</b>
   <b className=' border px-5 py-3 text-sm text-gray-500 '>Reviews(122)</b>

  </div>

  <div className='flex flex-col gap-4 border px-6 py-6 texxt-sm text-gray-500'>
  <p>Add warmth, comfort, and style to your space with this beautifully designed carpet. Expertly crafted using high-quality materials, it offers a plush, soft texture that feels luxurious underfoot. Perfect for living rooms, bedrooms, or offices, this versatile carpet enhances any decor with its elegant patterns and vibrant colors. Durable and easy to maintain, it’s designed to withstand everyday wear while maintaining its timeless appeal. Whether you're looking to make a bold statement or create a cozy ambiance, this carpet is an ideal choice to elevate the look of your home or workspace.</p>
  <p>Transform your space with this exquisite carpet, designed to blend comfort and sophistication seamlessly. Its plush texture provides a cozy feel, while the timeless design adds a touch of elegance to any room. Crafted for durability, this carpet is perfect for busy households or office spaces, maintaining its beauty with minimal upkeep. Elevate your interiors effortlessly with a piece that's as practical as it is stylish.</p>
  </div>
</div>
   {/* Display Related Product */}
   <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product