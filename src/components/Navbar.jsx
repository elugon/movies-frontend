import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <ul>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/">Home</NavLink></li>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/new">New</NavLink></li>
        <li><button onClick={() => navigate(-1)}>Go Back!</button></li>
      </ul>
   </div>
  )
}
