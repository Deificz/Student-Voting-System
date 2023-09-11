import React, { useState, useContext } from 'react'
import Header from '../../components/Header.jsx'
import SideBar from '../../components/display comps/sidebar.jsx'
import Main from '../../components/display comps/main_home.jsx'



export default function StudentHome() {

  return (
    <>
      <Header showNavbar={true}/>
      <div className='flex h-[100dvh]'>
        <SideBar/>
        <Main/>
      </div>
    </>
  )
}
