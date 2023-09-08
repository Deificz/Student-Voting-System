import React, { useContext } from 'react'
import { SidebarContext } from '../../utils/Contexts.jsx'

export default function sidebar() {
  const {setCurrentPosView} = useContext(SidebarContext);

  const handleClick = (e) => {
    setCurrentPosView(e.target.textContent);
  }

  return (
    <>
        <nav className=' bg-color-blue rounded-tr-xl rounded-br-xl h-[100dvh] border-r-color-blue w-fit pt-10'>
            <ul>
                <li onClick={handleClick} className='text-xl text-white hover:bg-color-gray hover:text-black cursor-pointer py-4 pl-5 w-[15dvw] transition-all duration-200 2xl:text-3xl'>President</li>
                <li onClick={handleClick} className='text-xl text-white hover:bg-color-gray hover:text-black cursor-pointer py-4 pl-5 w-[15dvw] transition-all duration-200 2xl:text-3xl'>Vice President</li>
                <li onClick={handleClick} className='text-xl text-white hover:bg-color-gray hover:text-black cursor-pointer py-4 pl-5 w-[15dvw] transition-all duration-200 2xl:text-3xl'>Secretary</li>
            </ul>
        </nav>
    
    </>
  )
}
