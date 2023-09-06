import React, { useState } from 'react'
import Header from '../../components/Header.jsx'
import SideBar from '../../components/home comps/sidebar.jsx'
import Main from '../../components/home comps/main.jsx'

export const SidebarContext = React.createContext();

export default function StudentHome() {
  const [currentView, setCurrentView] = useState('President');

  const contextValues = {
    currentView,
    setCurrentView,
  };

  return (
    <>
    <SidebarContext.Provider value={contextValues}>
      <Header showNavbar={true} adminNav={false}/>
      <div className='flex h-[100dvh]'>
        <SideBar/>
        <Main/>
      </div>
    </SidebarContext.Provider>
    </>
  )
}
