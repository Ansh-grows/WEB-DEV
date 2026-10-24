import { useState } from 'react'
import './App.css'
import ControlledComponent from './components/ControlledComponents.jsx'
import UnControlledComponent from './components/UnControlledComponent.jsx'
import UncontrolledComponentUseRef from './components/UncontrolledComponentUseRef.jsx'

function App() {
 
  return (
    <>
    <ControlledComponent/>
    <UnControlledComponent/>
    <UncontrolledComponentUseRef/>
    </>
  )
}

export default App
