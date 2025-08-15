import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx'
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('home')
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        setToken('')
        navigate("/")
    }
  return (
    <div className='navbar'>
        <Link to='/'><svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 300">
            <text x="56%" y="52%" dominantBaseline="middle" textAnchor="middle" className="spicey-text">
              Spicey 🌶️
            </text>
          </svg></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=> setMenu('home')} className={menu == 'home' ? 'active':""}>home</Link>
            <a href='#explore-menu' onClick={()=> setMenu('menu')} className={menu == 'menu' ? 'active':""}>menu</a>
            <a href='#app-download' onClick={()=> setMenu('mobile-app')} className={menu == 'mobile-app' ? 'active':""}>mobile-app</a>
            <a href='#footer' onClick={()=> setMenu('contact-us')} className={menu == 'contact-us' ? 'active':""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search_icon" />
            <div className="navbar-search-icon">
                <Link to='/cart'>
                <img  src={assets.basket_icon} alt="basket" />
                </Link>
                <div className={getTotalCartAmount() ? 'dot':''}></div>
            </div>
            {!token ?
            <button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt="" />
                <ul className='nav-profile-dropdown'>
                    <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" />Orders</li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
                </ul>
            </div>
             }
        </div>
    </div>
  )
}

export default Navbar