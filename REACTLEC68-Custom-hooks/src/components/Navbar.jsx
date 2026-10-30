import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
        <>
        <Link to="/dashboard">
            Dashboard
        </Link>
        <Link to="/profile">
            Profile
        </Link>
        <Link to="/">
            Home
        </Link>
        </>
  )
}

export default Navbar