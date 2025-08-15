import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="add items" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="list items" />
            <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.add_icon} alt="orders" />
            <p>Orders Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
