import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Hero from './pages/Hero'
import Option from './pages/Option'
import Register from './pages/Register'
import Signin from './pages/Signin'

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
])

  return (
    <>
        <RouterProvider router={router}/>
            
    </>
  )
}
