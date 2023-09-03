import React from 'react'
import Header from '../components/Header'
import Email from '../components/form comps/Email'
import FirstName from '../components/form comps/FirstName'
import LastName from '../components/form comps/LastName'
import MiddleName from '../components/form comps/MiddleName'
import Password from '../components/form comps/Password'
import StudentNum from '../components/form comps/StudentNum'
export default function Register() {
  return (
    <>
    <Header/>
    <form action="">
      <Email/>
      <FirstName/>
      <LastName/>
      <MiddleName/>
      <Password/>
      <StudentNum/>
    </form>
    </>
  )
}
