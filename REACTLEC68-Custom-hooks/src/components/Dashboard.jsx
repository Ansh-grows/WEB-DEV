import React from 'react'
import withAuth from '../utils/withAuth'
export default function Dashboard() {
  return (
    
     <div>Dashboard</div> 
    
  )
}
export const AuthDashboard = withAuth(Dashboard)
