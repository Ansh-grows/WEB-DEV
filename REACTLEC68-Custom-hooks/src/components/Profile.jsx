import React from 'react'
import withAuth from '../utils/withAuth'

function Profile({name, ROLL}) {
  return (
    <>
    <div>Profile Page</div>
    <div>NAME: {name}</div>
    <div>ROLL NO: {ROLL}</div>
    </>
    
  )
}
export const AuthProfile = withAuth(Profile)
export default Profile