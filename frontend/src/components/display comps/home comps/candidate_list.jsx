import React,{ useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../../../utils/Contexts.jsx'
import List from '../../others/list_comp.jsx';
export default function candidate_list() {

  const {currentPosView} = useContext(SidebarContext);
  
  return (
    <>
    {
        currentPosView === 'President' ? <List position='President'/>
        : currentPosView === 'V. President' ? <List position='Vice President'/>
        : currentPosView === 'Secretary' ? <List position='Secretary'/>
        : ''
    }
    </>
  )
}
