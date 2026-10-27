import { useContext, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { userContext } from './main'
import Navbar from './context/Navbar'

function Parent(){
  return(
    <div style={{backgroundColor:"yellow"}}>
    <h1>PARENT</h1>
    <Child/>
    </div>
  )
}
function Child(){
  return(
    <div style={{backgroundColor:"cyan"}}>
    <h1>CHILD</h1>
    <GrandChild/>
    </div>
  )
}
function GrandChild(){
  const value = useContext(userContext);

  return(
    <div style={{backgroundColor:"magenta"}}>
    <h1>GRANDCHILD - {value}</h1>
    </div>
  )
}

function App() {

  return (
    <div style={{backgroundColor:"pink"}}>
      <h1>APP</h1>
      <Parent/>
      <Navbar/>
    </div>
  )
}

export default App
