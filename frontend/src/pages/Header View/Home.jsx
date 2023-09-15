import React, { useState, useContext } from 'react'
import Header from '../../components/Header.jsx'
import SideBar from '../../components/display comps/sidebar.jsx'
import { Outlet } from 'react-router-dom'


export default function StudentHome() {

  return (
    <>
      <Header showNavbar={true}/>
      <div className='flex h-[100dvh]'>
        <SideBar/>
        <Outlet/>
      </div>
    </>
  )
}
