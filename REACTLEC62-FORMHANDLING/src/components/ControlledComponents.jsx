import { useState } from 'react'

function ControlledComponent() {
  //const [name, setName] = useState("")
  //const [email,setEmail] = useState("")
  //const [password,setPassword] = useState("");
  const [form,setForm] = useState({name:"ansh",email:"",password:""})
  function signup(e){
    e.preventDefault()
    //console.log('submitted')
    //console.log({name,email,password})
    console.log(form)
  }
  function handleInput(e){
   // console.log(e.target); This would print the html of the input tag in which you are typing
   //let value = e.target.value//It is giving the access of the input that we are writing in the input tags
   //let name = e.target.nameIt would give us the access of the name of the input tag on which we are working
   const {value,name} = e.target;
   setForm((prev)=>({...prev,[name]:value}))
   //console.log(value,name)
  }
  return (
    <>
    <h1>CONTROLLED COMPONENT/FORM</h1>
    {console.log('ansh')}
    {/*
    See right now the problem is that we are using multiple
    hooks for each of the input tags what we can do is make 
    one hook and for updation of whole form on one click and the problem of 
    multiple rerendering would also be resolved .
    */}
      <form onSubmit={signup}>
        <label>Name : </label>
        <input type="name" value={form.name} id="name" name="name" onInput={handleInput}/>
        <br/>
        <label>Email : </label>
        {/*<input type="email" id="email" name="email" onInput={(e)=>setEmail(e.target.value)}/>*/}
        <input type="email" value={form.email}id="email" name="email" onInput={handleInput}/>
        <br/>
        <label>Password : </label>
        
        <input type="text" value={form.password} id="password" name="password" onInput={handleInput}/>
        <br/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default ControlledComponent
