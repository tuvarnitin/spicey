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
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home