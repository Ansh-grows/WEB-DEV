import React, { useContext } from 'react'
import {ThemeContext} from "./ThemeContext.jsx"
import ThemeSelector from './ThemeSelector.jsx'

export function Navbar() {
    const {theme} = useContext(ThemeContext)
  return (
    <div>
        <h1>NAVBAR</h1>
        <h1>THEME:{theme}</h1>
        <ThemeSelector/>
    </div>
  )
}

export default Navbar