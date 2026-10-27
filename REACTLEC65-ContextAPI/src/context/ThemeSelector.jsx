import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeSelector() {
    const {setTheme} = useContext(ThemeContext)
  return (
    <div>
        <h2>Change Theme</h2>
        <select name="" id="" onChange={(e)=>setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
        </select>
    </div>
  )
}

export default ThemeSelector