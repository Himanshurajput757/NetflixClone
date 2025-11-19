import React from 'react'
import Navbar from '../componets/Navbar/navbar'
import Trending from '../componets/Trending/Trending'
import Reasons from '../componets/Reasons/Reasons'
import Questions from '../componets/Questions/Questions'
import Subscription from '../componets/Subscription/Subscription'
import Footer from '../componets/Footer/Footer'

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
