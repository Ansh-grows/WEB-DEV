import {useRef} from "react"

function UncontrolledComponentUseRef() {
  
  let nameRef = useRef("ANSH")
  let emailRef = useRef("ansh@gmail.com")
  function signup(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    console.log(e.target);
    console.log(nameRef)
    console.log(nameRef.current);
    console.log(nameRef.current.value)
    //console.log(emailRef)
    //console.log(emailRef.current);
    //console.log(emailRef.current.value)
    nameRef.current.focus()//It takes the cursor directly to the input section of name
  }
  
  return (
    <>
    {console.log('ansh')}
    <h1>UNCONTROLLED COMPONENTUSEREF/FORM</h1>
    
      <form onSubmit={signup}>
        <label >Name : </label>
        <input type="name" ref={nameRef} defaultValue={'ansh'} id="name" name="name" />
        <br/>
        <label>Email : </label>
        <input type="email" ref={emailRef} id="email" name="email" />
        <br/>
        <label>Password : </label>
        <input type="text" id="password" name="password" />
        <br/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default UncontrolledComponentUseRef
