import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Email from '../components/form comps/signin/Email'
import Password from '../components/form comps/signin/Password'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../utils/Auth'
export default function Signin() {

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const{ login, isAuthenticated, login_error } = useAuth();

  const handleSubmit =  async (e) =>{
    e.preventDefault()
    login(email, password);
    
  };

  useEffect(
    function () {
      if (isAuthenticated) navigate("/home/candidates", { replace: true });
      localStorage.setItem('Auth', JSON.stringify(isAuthenticated));
    },
    [isAuthenticated, navigate]
  );
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center mt-16 mb-16 h-fit'>
      <h1 className='mb-10 text-3xl font-bold md:text-5xl 2xl:text-6xl text-color-blue'>Sign In</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col items-center  justify-evenly items w-fit md:h-[60dvh] h-fit  border-color-blue border-4 p-6 md:p-10 2xl:p-14 rounded-xl shadow-card'>
        <Email setEmail = {setEmail}/>
        <Password setPassword = {setPassword}/>
        <h1 className={`text-color-red ${login_error ? 'visible' : 'invisible'}`}>User doesn't exist. Please try again!</h1>
       <button className='col-start-2 row-start-6 px-16 py-5 mt-5 text-xl font-semibold text-white transition-all duration-300 border-2 rounded-lg bg-color-blue 2xl:p-8 2xl:text-3xl shadow-button hover:bg-white hover:text-color-blue border-color-blue'>Sign-in</button>
      </form>
    </div>
    </>
  )
}
