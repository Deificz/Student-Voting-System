import React from 'react'

export default function sidebar() {
  return (
    <>
        <nav className=' bg-color-blue rounded-tr-xl rounded-br-xl h-[100dvh] border-r-color-blue w-fit pt-10'>
            <ul>
                <li className='text-xl text-white hover:bg-color-gray hover:text-black cursor-pointer py-4 pl-5 w-[15dvw] transition-all duration-200 2xl:text-3xl'>President</li>
                <li className='text-xl text-white hover:bg-color-gray hover:text-black cursor-pointer py-4 pl-5 w-[15dvw] transition-all duration-200 2xl:text-3xl'>Vice President</li>
                <li className='text-xl text-white hover:bg-color-gray hover:text-black cursor-pointer py-4 pl-5 w-[15dvw] transition-all duration-200 2xl:text-3xl'>Secretary</li>
            </ul>
        </nav>
    
    </>
  )
}
