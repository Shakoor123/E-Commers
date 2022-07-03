import  Announcement from '../components/Anouncement/Anouncement'
import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home