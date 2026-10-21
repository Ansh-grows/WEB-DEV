function Ffoter(){
  return (
    <>
    <ul>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
    </ul>
    </>
  )
}

export function Footer({user,name}){
    return(
        <>
        <p>Hey I am footer</p>
        <p>{user.isLoggedIn? user.name : "LOGIN"}</p>
        <p>{name}</p>
        </>
    )
}
export default Ffoter;