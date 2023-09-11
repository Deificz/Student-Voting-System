import React from 'react'

export default function candidate_info({isAdmin, setShowMore}) {

  const goBack = () =>{
    setShowMore(false);
  }
  return (
    <>

      <div id='candidate-panel' className='flex flex-col items-center w-[100dvw] h-[100dvh] px-5 pt-10 md:overflow-y-scroll'>
        <i class="fa-solid fa-arrow-left self-start text-color-blue text-3xl md:text-5xl 2xl:text-7xl font-bold cursor-pointer" onClick={goBack}> </i>
        <div className='min-h-[80px] min-w-[80px] md:min-h-[150px] md:min-w-[150px] 2xl:min-h-[200px] 2xl:min-w-[200px] md:mb-3 bg-black rounded-full text-white flex justify-center items-center mt-12 '>Logo</div>
        <h1 className='font-semibold text-xl md:text-2xl 2xl:text-4xl mt-5'>Juan Dela Cruz</h1>
        <h2 className='font-semibold text-xl md:text-2xl 2xl:text-4xl'>Partylist</h2>

        <div className='mt-10 flex flex-col justify-center items-center w-[50dvw] px-40 py-5 rounded-xl md:border-2 mb-10 border-color-blue md:shadow-card'>
          <h3 className='text-xl font-bold md:text-xl 2xl:text-3xl'>Introduction</h3>
          <p className='mb-5 mt-5 md:text-lg 2xl:text-2xl text-center'>Lorem ipsum</p>
          <h3 className='text-xl font-bold md:text-xl 2xl:text-3xl'>Awards</h3>
          <p className='mb-5 mt-5 md:text-lg 2xl:text-2xl text-left'>Lorem ipsum</p>
          <h3 className='text-xl font-bold md:text-xl 2xl:text-3xl'>Platforms</h3>
          <p className='mb-5 mt-5 md:text-lg 2xl:text-2xl text-left'>Lorem ipsum</p>
        </div>
      </div>
    
    </>
  )
}
