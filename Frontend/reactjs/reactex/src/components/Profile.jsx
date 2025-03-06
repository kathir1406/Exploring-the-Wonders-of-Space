import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const Auth=useAuth()
  const navigate=useNavigate()
  const handlelogout=()=>{
    Auth.logout()
    navigate('/login')
  }
  return (
    <div className='profile-container'>
      <div className='profile-body'></div>
      <div className='profile-content'>
      <h1>Profile👤</h1>
      <h2>Welcome {Auth.user}</h2>
      <button onClick={handlelogout} className='profile-btn'>Logout</button>
      </div>
     </div> 
  )
}
