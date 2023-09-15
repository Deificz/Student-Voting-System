import React, {useContext} from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Hero from '../pages/Hero'
import Option from '../pages/Option'
import Register from '../pages/Register'
import Signin from '../pages/Signin'
import Home from '../pages/Header View/Home'
import Vote from '../pages/Header View/Vote'


import Dashboard from '../pages/Header View/Dashboard'

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Hero/>} />
        <Route  path= "/option"element= {<Option/>}/>
        <Route  path= "/signin"element= {<Signin/>}/>
        <Route  path= "/register"element= {<Register/>}/>
        <Route  path= "/home"element= {<Home/>}/>
        <Route  path= "/vote"element= {<Vote/>}/>
        <Route  path= "/dashboard"element= {<Dashboard/>}/>
      </Route>
    ))

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
