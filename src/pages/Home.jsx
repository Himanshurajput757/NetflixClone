import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Trending from '../components/Trending/Trending'
import Reasons from '../components/Reasons/Reasons'
import Questions from '../components/Questions/Questions'
import Subscription from '../components/Subscription/Subscription'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className=' bg-black px-30 text-white '>
      <Navbar />
      <Trending />
      <Reasons />
      <Questions />
      <Subscription />
      <Footer />
    </div>
  )
}

export default Home
