import React from 'react'
import Header from '../components/Header'
import Email from '../components/form comps/register/Email'
import FirstName from '../components/form comps/register/FirstName'
import LastName from '../components/form comps/register/LastName'
import MiddleName from '../components/form comps/register/MiddleName'
import Password from '../components/form comps/register/Password'
import StudentNum from '../components/form comps/register/StudentNum'

export default function Register() {
  return (
    <>
    <Header/>
    
    <div className='flex flex-col items-center h-[110dvh] mt-16 md:mt-32 2xl:mt-48 transition-all duration-300'>
      <form action="" className='flex flex-col md:grid grid-cols-2 justify-center w-[80dvw] h-fit  border-color-blue border-4 p-6 md:p-10 2xl:p-14  rounded-xl shadow-card'>
        <h1 className='text-color-blue font-bold mb-10 text-3xl self-center md:text-3xl 2xl:text-5xl'>Student Sign-up</h1>
        <StudentNum/>
        <FirstName/>
        <MiddleName/>
        <LastName/>
        <Email/>
        <Password/>
        <button className='bg-color-blue px-16 py-5 mt-5 text-xl 2xl:p-8 2xl:text-3xl shadow-button md:w-fit text-white font-semibold rounded-lg justify-self-end hover:bg-white hover:text-color-blue border-color-blue border-2 transition-all duration-300 col-start-2 row-start-6'>SUBMIT</button>

      </form>
    </div>
   
    </>
  )
}
