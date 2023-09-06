import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav({adminNav}) {
  return (
    <>
    {
        adminNav ? 
            <nav>
                <ul className='flex items-center justify-between'>
                  <div className='flex'>
                      <li className='mr-10 font-semibold text-xl 2xl:text-3xl'>Home</li>
                      <li className='font-semibold text-xl 2xl:text-3xl'>Dashboard</li>
                  </div>
                  <li className='mr-5 font-semibold text-xl 2xl:text-3xl'>Sign out</li>
                </ul>
            </nav>
              :
            <nav>
                <ul className='flex items-center justify-between'>
                  <div className='flex'>
                      <Link to='/home'><li className='mr-10 font-semibold text-xl 2xl:text-3xl'>Home</li></Link>
                      <Link to='/vote'><li className='font-semibold text-xl 2xl:text-3xl'>Vote</li></Link>
                  </div>
                  <li className='mr-5 font-semibold text-xl 2xl:text-3xl'>Sign out</li>
                </ul>
            </nav>
    }
    
    </>
  )
}
