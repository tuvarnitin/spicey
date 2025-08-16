import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <svg className='foot-logo' xmlns="http://www.w3.org/2000/svg" viewBox="135 -45 1300 300">
                        <text x="55%" y="44%" dominantBaseline="middle" textAnchor="middle" className="spicey-text foot-logo">
                            Spicey
                        </text>
                    </svg>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo voluptas quo recusandae, veniam excepturi, doloremque officia blanditiis ab iure culpa voluptatibus modi voluptate assumenda eum odio tempora quis ipsam!</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-222-222-2223</li>
                        <li>example.spicey@gamil.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2025 &copy; Spicey.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
