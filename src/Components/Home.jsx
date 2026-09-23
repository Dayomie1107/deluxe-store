import React from 'react'
import Navbar from '../home/Navbar'
import Hero from '../home/Hero'
import categories from '../home/Categories'
import WhyChooseUs from '../home/WhyChooseUs'
import FeaturedCollection from '../home/FeaturedCollection'
import Newsletter from './Newsletter'
import Footer from '../home/Footer'

function Home({ addToCart }) {
  return (
    <div>
      <Hero />
      <categories />
      <WhyChooseUs />
      <FeaturedCollection addToCart={addToCart} />
      <Newsletter />
      <Footer />

    </div>
  )
}

export default Home
