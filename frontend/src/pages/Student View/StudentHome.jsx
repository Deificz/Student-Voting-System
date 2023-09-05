import React from 'react'
import Header from '../../components/Header.jsx'
import SideBar from '../../components/display comps/student/sidebar.jsx'
import Main from '../../components/display comps/student/main.jsx'
export default function StudentHome() {
  return (
    <>
      <Header showNavbar={true} adminNav={false}/>
      <div className='flex h-[100dvh]'>
        <SideBar/>
        <Main/>
      </div>
    </>
  )
}
