import React from 'react'
import Notification from './components/notification';
import WebInfo from './components/webInfo';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Categories from './components/Categories';
import Trending from './components/Trending';
import Posts from './components/Posts';
import BestSelling from './components/BestSelling';
import Blog from './components/Blog';
import Follow from './components/Follow';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Notification/>
      <WebInfo/>
      <Navbar/>
      <Heading/>
      <Categories/>
      <Trending/>
      <Posts/>
      <BestSelling/>
      <Blog/>
      <Follow/>
      <Footer/>
      
    </div>
  )
}

export default Home