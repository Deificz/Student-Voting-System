import React from 'react'
import Header from '../components/Header'
import Email from '../components/form comps/signin/Email'
import Password from '../components/form comps/signin/Password'
export default function Signin() {
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center h-fit mt-16'>
      <form action="" className='flex flex-col  justify-evenly items w-[80dvw] md:w-[35dvw] md:h-[60dvh] h-fit  border-color-blue border-4 p-6 md:p-10 2xl:p-14 rounded-xl shadow-card'>
        <Email/>
        <Password/>
        <button className='bg-color-blue px-16 py-5 mt-5 text-xl 2xl:p-8 2xl:text-3xl shadow-button text-white font-semibold rounded-lg hover:bg-white hover:text-color-blue border-color-blue border-2 transition-all duration-300 col-start-2 row-start-6'>Sign-in</button>

      </form>
    </div>
    </>
  )
}
