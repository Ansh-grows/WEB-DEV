import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

let colors = ["blue","pink","yellow","green"];
let result = colors.map((color)=>{
   return <li>{color}</li>
})

const user = {
  name : "Nishant",
  isOnline : true
}
function printName(){
  console.log(user.name);
}

function App() {
  
  return (
    <>
      <div>HELLO ANSH</div>
      <div>HELLO ANSH</div>
      <ul>
        {result}
      </ul>
      <button onClick={printName}>Click</button>
    </>
  )
}

export default App
