

function UnControlledComponent() {
  
 
  function signup(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    console.log(e.target);
  }
  
  return (
    <>
    {console.log('ansh')}
    <h1>UNCONTROLLED COMPONENT/FORM</h1>
    
      <form onSubmit={signup}>
        <label >Name : </label>
        <input type="name" defaultValue={'ansh'} id="name" name="name" />
        <br/>
        <label>Email : </label>
        <input type="email" id="email" name="email" />
        <br/>
        <label>Password : </label>
        
        <input type="text" id="password" name="password" />
        <br/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default UnControlledComponent
