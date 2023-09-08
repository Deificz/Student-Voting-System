import React from 'react'
import {Link} from 'react-router-dom'
import { UserViewContext } from '../../utils/Contexts'
import { useContext } from 'react'
export default function Nav() {
  
  const {isAdmin} = useContext(UserViewContext);

  return (
    <>
    
    <nav>
      <ul className='flex items-center justify-between'>
          <div className='flex'>
              <Link to='/home'><li className='mr-10 font-semibold text-xl 2xl:text-3xl'>Home</li></Link>
              {isAdmin ?
              <Link to='/dashboard'><li className='font-semibold text-xl 2xl:text-3xl'>Dashboard</li></Link>
                        :
              <Link to='/vote'><li className='font-semibold text-xl 2xl:text-3xl'>Vote</li></Link>}
          </div>
          <Link to='/'><li className='mr-5 font-semibold text-xl 2xl:text-3xl'>Sign out</li></Link>
      </ul>
    </nav>
    
    
    </>
  )
}
