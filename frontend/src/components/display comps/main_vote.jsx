import React from 'react'
import { useState } from 'react'

export default function main_vote() {
    const [president, setPresident] = useState();
    const [vicePresident, setVicePresident] = useState();
    const [secretary, setSecretary] = useState();
  
    const handlePresident = (e) => {
      setPresident(e.target.value);
    }
  
    const handleVicePresident = (e) => {
      setVicePresident(e.target.value);
    }
    const handleSecretary = (e) => {
      setSecretary(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }
  
    return (
      <>
  
     <div className='flex flex-col justify-center items-center pt-10 md:pt-20 2xl:pt-30 pb-10 md:pb-20 2xl:pb-30'>
      <h1 className='text-color-blue text-4xl font-bold mb-10 md:text-5xl md:mb-20 2xl:text-6xl 2xl:mb-30 '>Vote</h1>
      <form action="" className='flex flex-col w-[300px] md:w-[500px] 2xl:w-[700px]' onSubmit={handleSubmit}>
  
        <label htmlFor="" className='text-xl md:text-2xl 2xl:text-4xl font-semibold'>President</label>
        <select value={president} onChange={handlePresident} className='mb-10 text-lg md:text-2xl 2xl:4xl mt-2 border-color-blue border-2 p-3' required>
            <option value="">Select an option</option>
            <option value="Juan Dela Cruz">Juan Dela Cruz</option>
            <option value="Julyo Delo Santos">Julyo Delo Santos</option>
            <option value="option3">Agario Soronio</option>
        </select>
  
          <label htmlFor="" className='text-xl md:text-2xl 2xl:text-4xl font-semibold'>Vice President</label>
          <select value={vicePresident} onChange={handleVicePresident}  className='mb-10 text-lg md:text-2xl 2xl:4xl mt-2 border-color-blue border-2 p-3' required>
              <option value="">Select an option</option>
              <option value="Juan Dela Cruz">Juan Dela Cruz</option>
              <option value="Julyo Delo Santos">Julyo Delo Santos</option>
              <option value="option3">Agario Soronio</option>
            </select>
  
          <label htmlFor="" className='text-xl md:text-2xl 2xl:text-4xl font-semibold'>Secretary</label>
          <select value={secretary} onChange={handleSecretary}  className='mb-10 text-lg md:text-2xl 2xl:4xl mt-2 border-color-blue border-2 p-3' required>
            <option value="">Select an option</option>
            <option value="Juan Dela Cruz">Juan Dela Cruz</option>
            <option value="Julyo Delo Santos">Julyo Delo Santos</option>
            <option value="option3">Agario Soronio</option>
          </select>
          <button className='bg-color-blue px-16 py-5 mt-5 text-xl 2xl:p-8 2xl:text-3xl shadow-button md:w-fit text-white font-semibold rounded-lg self-end hover:bg-white hover:text-color-blue border-color-blue border-2 transition-all duration-300 col-start-2 row-start-6'>Vote</button>
  
      </form>
     </div>
      </>
    )
  }