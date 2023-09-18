import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import { useCandidates } from '../../utils/Candidates';
import { useVoteUtil } from '../../utils/VoteUtil';
import { useAuth } from '../../utils/Auth';

const ACTIONS = {
  SET_VOTE: 'set_vote',
  SET_USER_ID: null,
}

const initialState = {
  voteData: {
    userId: null,
    candidateId:[],
  },
}

const reducer = (state, action) => {
    switch(action.type){
      case ACTIONS.SET_VOTE:
        return {...state, voteData:{...state.voteData, 
                                    candidateId:[...state.voteData.candidateId,action.payload]}}
      case ACTIONS.SET_USER_ID:
        return {...state, voteData:{...state.voteData, userId: action.payload}}
      default:
        throw new Error('Action is unknown');
    };
}

export default function main_vote() {
    const {setVote} = useVoteUtil();
    const [{voteData},dispatch] = useReducer(reducer, initialState)

    const user = JSON.parse(localStorage.getItem('userData'));
    const {candidates,getCandidates,status} = useCandidates();
    const [isOk, setIsOk] = useState(false);
    
    const [president, setPresident] = useState({});
    const [vicePresident, setVicePresident] = useState({});
    const [secretary, setSecretary] = useState({});
    
    useEffect(() => {
      getCandidates();
      dispatch({type: ACTIONS.SET_USER_ID, payload: user.id});
    },[]);

    useEffect(() => {
      setVote(voteData);
      console.log(voteData);
    },[isOk])

    const handlePresident = (e) => {
      setPresident( Number(e.target.value));
    }
  
    const handleVicePresident = (e) => {
      setVicePresident(Number(e.target.value));
    }
    const handleSecretary = (e) => {
      setSecretary(Number(e.target.value));
    }
    

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({type: ACTIONS.SET_VOTE, payload: president});
      dispatch({type: ACTIONS.SET_VOTE, payload: vicePresident});
      dispatch({type: ACTIONS.SET_VOTE, payload: secretary});
      setIsOk(true);
    }
  
    return (
      <>
  
     <div className='flex flex-col items-center justify-center pt-10 pb-10 md:pt-20 2xl:pt-30 md:pb-20 2xl:pb-30'>
      <h1 className='mb-10 text-4xl font-bold text-color-blue md:text-5xl md:mb-20 2xl:text-6xl 2xl:mb-30 '>Vote</h1>
      <form action="" className='flex flex-col w-[300px] md:w-[500px] 2xl:w-[700px]' onSubmit={handleSubmit}>
  
        <label htmlFor="" className='text-xl font-semibold md:text-2xl 2xl:text-4xl'>President</label>
        <select onChange={handlePresident} className='p-3 mt-2 mb-10 text-lg border-2 md:text-2xl 2xl:4xl border-color-blue' required>
            <option value="">Select an option</option>
            {status === 'Done' && candidates.filter(candidate => candidate.rolename === 'President').map(candidate => (
              <option key={candidate.id}  value={candidate.id}>{candidate.name}</option>
            ))}
        </select>
  
          <label htmlFor="" className='text-xl font-semibold md:text-2xl 2xl:text-4xl'>Vice President</label>
          <select onChange={handleVicePresident}  className='p-3 mt-2 mb-10 text-lg border-2 md:text-2xl 2xl:4xl border-color-blue' required>
              <option value="">Select an option</option>
              {status === 'Done' && candidates.filter(candidate => candidate.rolename === 'Vice President').map(candidate => (
              <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
            ))}
            </select>
  
          <label htmlFor="" className='text-xl font-semibold md:text-2xl 2xl:text-4xl'>Secretary</label>
          <select onChange={handleSecretary}  className='p-3 mt-2 mb-10 text-lg border-2 md:text-2xl 2xl:4xl border-color-blue' required>
            <option value="">Select an option</option>
            {status === 'Done' && candidates.filter(candidate => candidate.rolename === 'Secretary').map(candidate => (
              <option key={candidate.id}  value={candidate.id}>{candidate.name}</option>
            ))}
          </select>
          <button className='self-end col-start-2 row-start-6 px-16 py-5 mt-5 text-xl font-semibold text-white transition-all duration-300 border-2 rounded-lg bg-color-blue 2xl:p-8 2xl:text-3xl shadow-button md:w-fit hover:bg-white hover:text-color-blue border-color-blue'>Vote</button>
  
      </form>
     </div>
      </>
    )
  }