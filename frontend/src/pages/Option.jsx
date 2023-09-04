import React from 'react'
import Header from '../components/Header'
import {Link, Outlet} from 'react-router-dom'
export default function Option() {
  return (
    <>
    <Header/>
    <div className='flex flex-col md:flex-row justify-evenly items-center h-full lg:h-[60vh] w-full 2xl:h-[70vh] mt-16 '>
        
        <div className='flex flex-col justify-center items-center h-[400px] 2xl:h-[600px] p-10 w-[80vw] lg:w-[30vw] border-4 border-solid border-color-blue rounded-[50px] shadow-card'>
            <h1 className='text-black font-bold text-center text-3xl 2xl:text-5xl'>Are you a student?</h1>
            <Link to="/signin"><button className='w-[200px] bg-wite p-5 mt-10 2xl:text-3xl 2xl:mt-20 shadow-button text-black font-semibold rounded-lg hover:bg-color-blue hover:text-white border-color-blue border-2 transition-all duration-300'>Sign in</button></Link>
            <h1 className='mt-10 text-lg md:text-2xl font-bold'>Sign up to <Link to='/register'><span className='text-color-blue'>register</span></Link></h1>
        </div>
       
        <h1 className='text-[50px] m-10 md:mt-0'>or</h1>
        
        <div className='flex flex-col justify-center items-center h-[400px] 2xl:h-[600px] p-10 w-[80vw] lg:w-[30vw] border-4 border-solid border-color-blue rounded-[50px] shadow-card mb-10'>
            <h1 className='text-black font-bold text-center text-3xl 2xl:text-5xl'>Are you an admin?</h1>
            <Link to="/signin"><button className='w-[200px] bg-wite p-5 mt-10 2xl:text-3xl 2xl:mt-20 shadow-button text-black font-semibold rounded-lg hover:bg-color-blue hover:text-white border-color-blue border-2 transition-all duration-300'>Sign in</button></Link>
            <h1 className='mt-10 text-2xl font-bold invisible'> <span className='text-color-blue'>register</span></h1>
        </div>
    </div>
    </>
  )
}
