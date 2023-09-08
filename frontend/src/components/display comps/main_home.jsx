import React, { useContext, useState } from 'react'
import '../../../styles/custom.css'
import CandidateList from './home comps/candidate_list';
import CandidateInfo from './home comps/candidate_info';
import { UserViewContext } from '../../utils/Contexts.jsx';

export default function main_home() {
  const [candidateID, setCandidateID] = ('');
  const {isAdmin} = useContext(UserViewContext);
  const [showMore, setShowMore] = useState(false);
  
  return (
   <>
   {!showMore ? <CandidateList isAdmin = {isAdmin} setShowMore = {setShowMore} setCandidateID = {setCandidateID}/> 
              : <CandidateInfo isAdmin = {isAdmin} setShowMore = {setShowMore} candidateID = {candidateID}/>}
   </>
    
  )
}
