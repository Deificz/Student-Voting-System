import React, { useEffect, useState } from 'react'

export default function Email({setEmail}) {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInput = (e) => {
      if(e.target.value)
        setIsEmpty(false);
      else
        setIsEmpty(true);
      setEmail(e.target.value)
  }
  

  return (
    <div className='flex flex-col mb-3 col-start-2 row-start-2 md:text-lg 2xl:text-2xl'>
      <label htmlFor="email">Email</label>
      <input type="email" className={`border-black focus:outline-color-blue border-2 mt-2 rounded-lg px-2 py-1 md:text-xl 2xl:text-3xl transition-all duration-500
                                      valid:border-color-green valid:bg-green-200
                                      ${isEmpty ? '' : 'invalid:border-color-red invalid:bg-red-200'}`} placeholder='jdelacruz@email.com' required onChange={handleInput} />
    </div>
  )
}

