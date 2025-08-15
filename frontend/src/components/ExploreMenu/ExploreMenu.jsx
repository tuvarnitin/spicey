import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets.js'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse manu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our missio is to satisfy your cravings and elevate  your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>(
                <div onClick={()=>{setCategory(prev=>prev === item.menu_name ? 'All' : item.menu_name)}} key={index} className='explore-menu-list-item'>
                    <img className={category == item.menu_name ? 'active':''} src={item.menu_image} alt="menu" />
                    <p className={category == item.menu_name ? 'active-color':''}>{item.menu_name}</p>
                </div>
            ))}
        </div>
            <hr/>
    </div>
  )
}

export default ExploreMenu