import React from 'react'

export default function Email() {
  return (
    <div className='flex flex-col mb-3  '>
        <label htmlFor="" className='md:text-xl 2xl:text-3xl 2xl:mb-3'>Student Number</label>
        <input type="text" className='border-black focus:outline-color-blue bg-color-gray focus:bg-white transition-all duration-300 border-2 mt-2 rounded-lg px-5 py-4 md:text-2xl 2xl:text-4xl ' placeholder='juan_delacruz@email.com'/>
    </div>
  )
}
