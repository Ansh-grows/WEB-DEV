import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';


function Timer(){
  useEffect(()=>{
    const id = setInterval(()=>{
    console.log('ANSH')
  },1000)

  return ()=>{
    console.log('clean up')
    clearInterval(id)
    //See what was happening was that when I was unmounting this component 
    //from the ui timer was still running so for stopping that
    //we used this clean up function it runs whenever the component is unmounted
    
  }
  },[])
  //setInterval(()=>{
   // console.log('ANSH')
  //},1000)
  return(
    <>
    <h1>TIMER COMPONENT</h1>
    </>
  )
}

function App() {
  const [toggle,setToggle] = useState(true);
  const [name,setName] = useState("")
  const [productCount,setProductCount] = useState(0);
  const [product,setProduct] = useState([]);
  
  //fetch("https://dummyjson.com/products")
  //.then((res)=>res.json())
  ///.then((data)=>{
    //console.log(data);
    //setProductCount(data.total);
    //setProduct(data.products)
  //})
  useEffect(()=>{
    //fetch("https://dummyjson.com/products")
    //.then((res)=>res.json())
    //.then((data)=>{
    //console.log(data);
   // setProductCount(data.total);
   // setProduct(data.products)
  //})
  async function getProducts(){
    let response = await fetch("https://dummyjson.com/products")
    let data = await response.json();
    //let {data} = await axios.get("https://dummyjson.com/products")
    console.log(data);
    setProductCount(data.total);
    setProduct(data.products);
  }
  getProducts()
  return function(){
    console.log('cleanup')
  }
  },[name])
  return (
    <>
    {
      toggle?<Timer/>:<div></div>
    }
    <button onClick={()=>setToggle((prev)=>!prev)}>Show Timer Component</button>
      {/*<Timer/>*/}
      <h1>FETCH - {productCount}</h1>
      <ul>
        <input type="text" onInput={(e)=>setName(e.target.value)}/>
        {product.map((p)=>{
          return <li key={p.id}>{p.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
