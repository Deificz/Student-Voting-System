import React from 'react'

export default function candidate_info({isAdmin, setShowMore}) {

  const goBack = () =>{
    setShowMore(false);
  }
  return (
    <>

      <div id='candidate-panel' className='flex flex-col items-center w-[100dvw] h-[100dvh] px-5 pt-10 md:overflow-y-scroll'>
        <i class="fa-solid fa-circle-arrow-left self-end text-color-blue text-4xl md:text-6xl 2xl:text-8xl font-bold cursor-pointer mr-10" onClick={goBack}> </i>
        <div className='min-h-[80px] min-w-[80px] md:min-h-[150px] md:min-w-[150px] 2xl:min-h-[200px] 2xl:min-w-[200px] md:mb-3 bg-black rounded-full text-white flex justify-center items-center mt-12 '>Logo</div>
        
        <h1 className='mt-5 text-xl font-semibold md:text-2xl 2xl:text-4xl'>Juan Dela Cruz</h1>
        <h2 className='text-xl font-semibold md:text-2xl 2xl:text-4xl'>Partylist</h2>

        <div className='mt-10 flex flex-col justify-center items-center w-[50dvw] px-40 py-5 rounded-xl md:border-2 mb-10 border-color-blue md:shadow-card'>
          <h3 className='text-xl font-bold md:text-xl 2xl:text-3xl'>Introduction</h3>
          <p className='mt-5 mb-5 text-center md:text-lg 2xl:text-2xl'>Lorem ipsum</p>
          <h3 className='text-xl font-bold md:text-xl 2xl:text-3xl'>Awards</h3>
          <p className='mt-5 mb-5 text-left md:text-lg 2xl:text-2xl'>Lorem ipsum</p>
          <h3 className='text-xl font-bold md:text-xl 2xl:text-3xl'>Platforms</h3>
          <p className='mt-5 mb-5 text-left md:text-lg 2xl:text-2xl'>Lorem ipsum</p>
        </div>
      </div>
    
    </>
  )
}
