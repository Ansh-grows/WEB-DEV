import React, { useState } from 'react'

function Counter({printCount}) {
    useState() 
    {/*use state returns us two things one the function
        to upgrade the value and the other one is the current value of 
        the variable */}
    let [value,setValue] = useState(0);
    function increment(){
        {/*setValue(value+1)
        setValue(value+1)
        setValue(value+1)
        setValue(value+1)
        see when you call the function like this the value
        generated wuld remain the same cause the value of value
        has not been incremented it remained the same.*/}
        setValue((prev)=>prev+1);
        //setValue((prev)=>prev+1);
        //setValue((prev)=>prev+1);
        console.log(value);
        {/*
        Now on one click it would increment by three
            */ }
        printCount(value);
    }
    function decrement(){
       setValue(value-1)
       setValue(value-1)
       console.log(value);  
       printCount(value);
    }
  return (
    <>
    <div>Counter</div>
    <button onClick={increment} >LIKE</button>
    <p>{value}</p>
    <button onClick={decrement}>DISLIKE</button>
    </>
    
  )
}

export default Counter