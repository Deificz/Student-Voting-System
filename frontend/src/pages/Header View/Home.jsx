import React, { useState, useContext } from 'react'
import Header from '../../components/Header.jsx'
import SideBar from '../../components/display comps/sidebar.jsx'
import Main from '../../components/display comps/main_home.jsx'
import { useAuth } from '../../utils/Auth.jsx';



export default function StudentHome() {
  const {userData} = useAuth();
  console.log(userData)

 
  return (
    <>
    <h1>{userData.email}</h1>
      <Header showNavbar={true}/>
      <div className='flex h-[100dvh]'>
        <SideBar/>
        <Main/>
      </div>
    </>
  )
}
