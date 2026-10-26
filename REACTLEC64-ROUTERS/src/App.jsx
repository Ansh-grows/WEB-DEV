import { useState } from 'react'
import './App.css'
import {Routes,Route,Link,Outlet, useParams} from 'react-router-dom'
import Login from './components/login.jsx'
import Dashboard from './components/dashboard.jsx'
// For routing we use react-router-dom npm i react-router-dom
function App() {
  function Navbar(){
    return(<>
    <Link to="/">HOME</Link>
    <Link to="/product-page">PRODUCT</Link>
    <Link to="/about-us">ABOUT</Link>
    <Link to="/login">LOGIN</Link>
    <Outlet/>
    </>)
  }
  function Home(){
    return(
      <>
      <h1>HOME</h1>
      </>
    )
  }
  function Product(){
    const params = useParams();
    console.log(params)
    return(
      <>
      <h1>PRODUCT</h1>
      </>
    )
  }
  function About(){
    return(
      <>
      <h1>ABOUT-US</h1>
      </>
    )
  }
  return (
    <>
    
    <Routes >
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/product-page/:id/:title" element={<Product/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
    </Routes>
      
    </>
  )
}

export default App
