import React, { useState } from 'react'
import Header from '../components/Header'
import Email from '../components/form comps/signin/Email'
import Password from '../components/form comps/signin/Password'
import {Link} from 'react-router-dom'
export default function Signin() {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center h-fit mt-16 mb-16'>
      <h1 className='mb-10 text-3xl md:text-5xl 2xl:text-6xl text-color-blue font-bold'>Sign In</h1>
      <form action="" className='flex flex-col items-center  justify-evenly items w-[80dvw] md:w-[35dvw] md:h-[60dvh] h-fit  border-color-blue border-4 p-6 md:p-10 2xl:p-14 rounded-xl shadow-card'>
        <Email setEmail = {setEmail}/>
        <Password setPassword = {setPassword}/>
       <Link to="/home"><button className='bg-color-blue px-16 py-5 mt-5 text-xl 2xl:p-8 2xl:text-3xl shadow-button text-white font-semibold rounded-lg hover:bg-white hover:text-color-blue border-color-blue border-2 transition-all duration-300 col-start-2 row-start-6'>Sign-in</button></Link> 
      </form>
    </div>
    </>
  )
}
