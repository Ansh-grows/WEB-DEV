import React from 'react'
import { useState } from 'react';

function Todo() {
    //let value = ""
    let [value,setValue] = useState("");
    function printInput(e){
      // console.log(e.target.value);
        //value = e.target.value;
        setValue(e.target.value)
    }
    
    let [todos,setTodos] = useState([]);
    function addTodo(e){
        e.preventDefault();
        if(!value.trim()){
            return;
        }
        setTodos((prev)=>[...prev,value]);
        setValue("");
        
    }
    {/*See what was happening was that on clicking the
        button in the form the page was reloading
        and on using onSubmit and using addTodo we
        are preventing the page from reloading.
    */}
    
   console.log(todos);
    
  return (
    <>
    <div>Todo</div>
    <form onSubmit={addTodo}>
        <input type="text" value={value} onInput={printInput}/>
        <button >ADD</button>
    </form>
    <ul>
        {
            todos.map((todo)=>{
            return (
                <li key={index}>{todo}</li>
            )
            }
            )
        }
    </ul>
    </>
    
  )
}

export default Todo