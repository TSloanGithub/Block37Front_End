import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import LogInForm from './components/Login'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navigation'
import AccountDetails from './components/Account'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LogInForm/>}/>
        <Route path='/account' element={<AccountDetails/>}/>
      </Routes>
    </>
  )
}

export default App
