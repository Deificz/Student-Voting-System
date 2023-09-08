import React from 'react'
import { useState } from 'react';
export default function LastName() {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInput = (e) => {
      if(e.target.value){
        setIsEmpty(false);
      }
      else{
        setIsEmpty(true);
      }
  }

  return (
    <div className='flex flex-col mb-3 col-start-1 row-start-5 md:text-lg 2xl:text-2xl'>
      <label htmlFor="last-name">Last Name</label>
      <input type="text" className={`border-black focus:outline-color-blue border-2 mt-2 rounded-lg px-2 py-1 md:w-[350px] 2xl:w-[600px] md:text-xl 2xl:text-3xl transition-all duration-500
                                      valid:border-color-green valid:bg-green-200
                                      ${isEmpty ? '' : 'invalid:border-color-red invalid:bg-red-200'}`} placeholder='Dela Cruz' required onChange={handleInput} />
    </div>
  )
}
