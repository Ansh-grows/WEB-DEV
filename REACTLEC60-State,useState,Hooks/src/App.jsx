import Counter from './components/Counter.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx';
import { useState } from 'react';
import Todo from './components/Todo.jsx';

function App() {
  const [value,setValue] = useState(0);
  function  printCount(val){
    console.log("hey buddy");
    console.log(val);
    setValue(val);
  }

  return (
    <>
      <Navbar count={value}/>
      <Counter printCount={printCount}/>
      <Todo/>
    </>
  )
}

export default App
