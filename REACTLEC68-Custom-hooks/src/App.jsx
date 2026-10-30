import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Dashboard, { AuthDashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import {Routes,Route} from 'react-router-dom'

import { AuthProfile } from './components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dashboard/> */}
      <Navbar/>
      {/* <AuthDashboard/> */}
      <Routes>
        <Route path="/" element={<p>HOME</p>}/>
        <Route path="/dashboard" element={<AuthDashboard/>}/>
        <Route path="/profile" element={<AuthProfile name="ANSH" ROLL="25BCS026"/>}/>
      </Routes>
    </>
  )
}

export default App
