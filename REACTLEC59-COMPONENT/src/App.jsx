import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Ffoter from './components/Footer'
import { Footer } from './components/Footer'
import { Product } from './components/product'
import { Products } from './components/products'
import { Books } from './components/books'

let products = [
  {
    title:"MAZZA",
    price:"20rs"
  },
  {
    title:"coca-cola",
    price:"20rs"
  }
];
let user = {
  name:"ansh",
  isLoggedIn:true
}
function App() {
  

  return (
    <>
      <Ffoter/>{/*This was a default export*/}
      <Footer user={user} name={user.name}/>{/* See this was a named export*/}
      <div>HEY BROTHER</div>
      {/*<div style={{backgroundColor:"pink",color:"black"}}>
        {products.map(({title,price},i)=>{
          return <Product key={i} title={title} price={price}/>
        })}
      </div>*/}
      <Products products={products}>
        I AM CHILDREN PROP
      </Products>

      <Books/>
    </>
  )
}

export default App
