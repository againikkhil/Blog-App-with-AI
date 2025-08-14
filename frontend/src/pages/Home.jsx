import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import BlogList from '../component/BlogList'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'
import Blog from './Blog'

const Home = () => {
  return (
    <>
       <Navbar/>
       <Header/>
       <BlogList/>
       <Newsletter/>
       <Footer/>
       {/* <Blog/> */}
    </>
  )
}

export default Home
