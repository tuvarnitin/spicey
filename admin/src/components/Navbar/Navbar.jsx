import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/admin_assets/assets.js'
const Navbar = () => {
  return (
    <div className='navbar'>
      <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 300">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="spicey-text">
          Spicey 🌶️
        </text>
      </svg>
      <img className='profile' src={assets.profile_image} alt="profile" />
    </div>
  )
}

export default Navbar