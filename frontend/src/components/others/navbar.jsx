import React from 'react'

export default function Nav({adminNav}) {
  return (
    <>
    {
        adminNav ? 
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <h1 className='mr-10 font-semibold text-xl'>Home</h1>
                    <h1 className='font-semibold text-xl'>Dashboard</h1>
                </div>
                <h1 className='mr-5 font-semibold text-xl'>Sign out</h1>
            </div>
              :
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <h1 className='mr-10 font-semibold text-xl'>Home</h1>
                    <h1 className='font-semibold text-xl'>Vote</h1>
                </div>
                <h1 className='mr-5 font-semibold text-xl'>Sign out</h1>
            </div>
    }
    
    </>
  )
}
