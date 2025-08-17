import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'

const Home = () => {
  const [category, setCategory] = useState("All")
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div>
      {getTotalCartAmount() !== 0 &&

        <div className='basket-icon' >
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
              role="img" ariaLabel="Shopping cart"
            >
              <path d="M3 3h2l1.4 8.5a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.9-1.5l1.1-5.2H6.2" />
              <path d="M7 7h12" />
              <circle cx="10" cy="20" r="1.6" />
              <circle cx="17.5" cy="20" r="1.6" />
            </svg>
          </Link>
          <div className='cart-amount'>&#x20b9;{getTotalCartAmount()}</div>
        </div>
      }
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home