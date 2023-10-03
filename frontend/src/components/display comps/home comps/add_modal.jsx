import React, { useState } from 'react'
import Text from '../../form comps/candidate/add_text'
export default function add_modal({closeModal}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [partylist, setPartylist] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [awards, setAwards] = useState("");
    const [platforms, setPlatforms] = useState("");

  return (
    <dialog className='bg-black bg-opacity-70 w-full h-full z-20 flex justify-center items-center'>
       <form action="" method='POST' className='flex flex-col md:grid grid-cols-2 p-5 border-2 border-color-blue rounded-2xl mt-10 mb-10 md:ml-28 bg-white'>
            <div className='grid col-span-2 grid-cols-2 '>
                <h1 className='text-2xl md:text-3xl 2xl:text-4xl mb-5 font-semibold row-start-2'>Add Candidate</h1>
                <button className='justify-self-end col-start-2' onClick={() => closeModal(false)}><i class="fa-regular fa-circle-xmark text-3xl hover:text-color-red duration-300 transition-all md:text-4xl 2xl:text-5xl"></i></button>
            </div>
            <Text first_name={true} setFirstName={setFirstName}/>
            <Text last_name={true} setLastName={setLastName} />
            <Text partylist={true} setPartylist={setPartylist}/>
            <Text introduction={true} setIntroduction={setIntroduction}/>
            <Text awards={true} setAwards={setAwards}/>
            <Text platforms={true} setPlatforms={setPlatforms}/>
            <button
            type="submit"
            onSubmit={() => navigate("/option")}
            className="justify-self-end col-start-2 px-16 py-5 mt-5 text-xl font-semibold text-white transition-all duration-300 border-2 rounded-lg bg-color-blue 2xl:p-8 2xl:text-3xl shadow-button md:w-fit  hover:bg-white hover:text-color-blue border-color-blue"
          >
            Submit
          </button>
       </form>
    </dialog>
    
  )
}
