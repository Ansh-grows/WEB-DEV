import { useState } from 'react'
import './App.css'
import Keys from './components/Keys.jsx';


function Counter(){
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount((prev)=>prev+1)}>INCREMENT</button>
    </>
  )
}
function App() {
  let [tag,setTag] = useState(true);
  

  return (
    <>
    {tag ?(
      <div>
        <p>ANSH</p>
        <Counter/>
      </div>
    ):(
      <section>
        <p>JIYA</p>{/*/This is to show case that if any parent changes then its child component would also rerender.*/}
        <Counter/>
      </section>
    )}
    {tag?<Counter/>:<Counter/>} {/*//See for this on clicking change button
    //the counter component would rerender but the values would again initiate to 0
    //cause both the counters are present on the same line i.e. 30 . but yet if you want to reset the component
    //assigh keys to both the counters*/}
    <button onClick={()=>setTag((prev)=>!prev)}>Change</button>
    <Keys/>
    </>
  )
}

//console.log(<h1 id='1' className='abcd'><p className='name'>ANSH</p></h1>);
//console.log(App()) This would give us the error cause
//a there is a hook in this component and hooks only run
//in the react component so normal function call cannot be made
//console.log(<App/>)
export default App
