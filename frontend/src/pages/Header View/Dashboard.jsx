import React from 'react'
import { SidebarContext } from '../../utils/Contexts'
import Sidebar from '../../components/display comps/sidebar'
import Header from '../../components/Header'
import Main from '../../components/display comps/main_dashboard'
export default function Dashboard() {
  return (
    <>
    <Header showNavbar={true} adminNav={true}/>
    <div className='flex h-[100dvh]'>
      <Sidebar/>
      <Main/>
    </div>
    </>
  )
}
