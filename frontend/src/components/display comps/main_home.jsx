import React, { useContext, useEffect, useState } from 'react'
import '../../../styles/custom.css'
import CandidateList from './home comps/candidate_list';
import CandidateInfo from './home comps/candidate_info';


export default function main_home() {
  const [showMore, setShowMore] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
  
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    const [role]= userData.roles;
    if(role === 'ROLE_USER')
      setIsAdmin(false);
    else
      setIsAdmin(true)
  },[]);

  return (
   <>
   {!showMore ? <CandidateList isAdmin = {isAdmin} setShowMore = {setShowMore} /> 
              : <CandidateInfo isAdmin = {isAdmin} setShowMore = {setShowMore} />}
   </>
    
  )
}
