import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault()
        console.log('logged in');
        navigate("/dashboard")
    }
  return (
    <>
    <h1>LOGIN</h1>
    <form onSubmit={handleLogin}>
        <input type="text" name="username" id=""/>
        <button>Login</button>
    </form>
    </>
  )
}

export default Login;