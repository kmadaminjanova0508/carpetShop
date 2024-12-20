
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ()  => {
  const [currentState, setCurrentState] = useState('Sign up');
  const navigate = useNavigate(); 
  
  
  const onSubmitHandler = async (event) => {
 
   event.preventDefault();
   try {
    
    navigate('/'); 
  } catch (error) {
    console.log(error);
  }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-5 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      
      {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' type="text" required /> } 
      <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' type="text" required />
      <input className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' type="text" required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
       {
        currentState === 'Login'
        ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Don't have an account yet?Create account</p>
        : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Alredy have an account? Login Here</p>
       }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up' }</button>
    </form>
  )
}

export default Login