import React, {useContext} from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Hero from '../pages/Hero'
import Option from '../pages/Option'
import Register from '../pages/Register'
import Signin from '../pages/Signin'
import Home from '../pages/Header View/Home'
import Vote from '../pages/Header View/Vote'


import Dashboard from '../pages/Header View/Dashboard'

export default function Router() {

  const router = createBrowserRouter([
    {
        path: "/",
        index:true,
        element: <Hero/>
    },
    {
      path: "/option",
      element: <Option/>
    },
    {
      path: "/signin",
      element:<Signin/>
    },
    {
      path: "/register",
      element:<Register/>
    },
    {
      path: "/home",
      element: <Home/>,
      children: [
        { path: "president", element: <Home /> },
        { path: "vice", element: <Home /> },
        { path: "sec", element: <Home /> },
      ],
    },
    {
      path: "/vote",
      element: <Vote/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
])



  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
