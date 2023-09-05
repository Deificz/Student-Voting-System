import React from 'react'
import Nav from './others/navbar';
import {Link} from 'react-router-dom'
export default function Header({showNavbar, adminNav}) {
  return (
    <>
    <header className='p-5 shadow-xl grid items-center grid-cols-[.8fr,1fr]'>
        <div className='flex items-center '>
            <div className='bg-slate-400 h-16 w-16 rounded-full flex justify-center items-center mr-3 '>Logo</div>
            <Link to='/'><h1 className='text-3xl font-extrabold text-color-blue 2xl:text-4xl'>Student Election</h1></Link>
        </div>
        {showNavbar && <Nav adminNav={adminNav}/> }
    </header>
    </>
  )
}
