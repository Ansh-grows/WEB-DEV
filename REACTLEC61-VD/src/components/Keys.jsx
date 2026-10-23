import React, { useState } from 'react'

function Product({name}){
    let [products,setProducts] = useState(["Wings","Chicken PeriPeri","Boiled Egg","Beef"])
    let [quantity,changeQuantity] = useState(0);
    return(
        <>
        <h1>{name}</h1>
        <button onClick={()=>changeQuantity((prev)=>prev+1)}>
            Quantity : {quantity}
        </button>
        </>
    )
}
function Keys() {
    let [products,setProducts] = useState(["Wings","Chicken PeriPeri","Boiled Egg","Beef"])
  return (
    <div>
        {products.map((p)=>(
            <Product name={p} key={p}/>
        ))}
        <button onClick={()=>setProducts((prev)=>prev.splice(1))}>remove</button>
    </div>
  )
}

export default Keys