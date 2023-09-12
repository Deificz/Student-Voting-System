import React,{ useContext } from 'react'
import { SidebarContext } from '../../../utils/Contexts.jsx'

export default function candidate_list({isAdmin, setShowMore}) {

  const {currentPosView} = useContext(SidebarContext);
  
  const handleClick = (e) =>{
    setShowMore(true);
  }

  return (
    <>
    {
        currentPosView === 'President' ? 
        <div className='w-[100dvw] h-[100dvh] flex flex-col items-center'>
            <h1 className='mt-10 text-3xl text-center 2xl:text-4xl'>President</h1>
            <div id='candidate-panel' className='m-5 border-t-2 border-color-blue md:grid md:grid-cols-3 md:overflow-y-auto'>
                <div className='flex flex-col justify-evenly h-[300px] w-[230px] md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] border-2 border-color-blue m-10 rounded-xl shadow-card hover:-translate-y-3 transition-all duration-300'>
                    <div className='flex items-center px-2 py-5'>
                        <div className='h-[80px] w-[80px] bg-black rounded-full text-white flex justify-center items-center'>Logo</div>
                        <h1 className='ml-5 font-semibold text-md md:text-xl 2xl:text-3xl'>Juan Dela Cruz <span className=''><br />Partylist</span></h1>
                    </div>
                    <p className='p-5 text-sm text-center md:text-lg 2xl:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <h1 className='mr-5 text-xs font-bold text-right transition-all duration-300 cursor-pointer md:text-md 2xl:text-xl hover:text-color-blue' onClick={handleClick}>View more..</h1>
                </div>
            </div>
        </div> 
 
        : currentPosView === 'V. President' ? 
        <div className='w-[100dvw] h-[100dvh] flex flex-col items-center'>
            <h1 className='mt-10 text-3xl text-center 2xl:text-4xl'>Vice President</h1>
            <div id='candidate-panel' className='m-5 md:border-t-2 border-color-blue md:grid md:grid-cols-3 md:overflow-y-auto'>
                <div className='flex flex-col justify-evenly h-[300px] w-[230px] md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] border-2 border-color-blue m-10 rounded-xl shadow-card hover:-translate-y-3 transition-all duration-300'>
                    <div className='flex items-center px-2 py-5'>
                    <div className='h-[80px] w-[80px] bg-black rounded-full text-white flex justify-center items-center'>Logo</div>
                    <h1 className='ml-5 font-semibold text-md md:text-xl 2xl:text-3xl'>Peter Dela Cruz <span className=''><br />Partylist</span></h1>
                </div>
                <p className='p-5 text-sm text-center md:text-lg 2xl:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h1 className='mr-5 text-xs font-bold text-right transition-all duration-300 cursor-pointer md:text-md 2xl:text-xl hover:text-color-blue' onClick={handleClick}>View more..</h1>
            </div>
        </div>
        </div> 
        
        : <h1>Secretary</h1>
    }
    </>
  )
}
