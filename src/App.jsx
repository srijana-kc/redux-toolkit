import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserDetails from './components/userDetails'
// import { DeleteAllUser } from './components/DeleteAllUser'

function App() {

  return (
    <>
    <Navbar/>
    <UserDetails/>
    {/* <DeleteAllUser/> */}
    
    </>
  )
}

export default App
