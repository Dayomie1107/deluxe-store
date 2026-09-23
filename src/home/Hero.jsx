import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaSearch } from 'react-icons/fa'
import fashion from '/assets/fashion.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LiaPlaneArrivalSolid } from 'react-icons/lia'

function Hero() {

  const words = [
    "Your Style",
    "Your Luxury",
    "Your Fashion",
    "Your Elegance",
    "Your Wardrobe",
  ];

  const sequence = [];

  words.forEach((word) => {
    sequence.push(word, 2000);
  });

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {

    if (search.trim() === "") return;

    navigate(`/search?query=${encodeURIComponent(search.trim())}`);

  }

  return (
    <div
      className='relative w-full bg-cover bg-center bg-no-repeat sm:bg-fixed'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .40), rgba(0, 0, 0, .40)), url(${fashion})`,
      }} >

      <div className="max-w-7xl mx-auto min-h-[85vh] sm:min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-0">

        <div className="w-full max-w-2xl">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">

            Elevate

            <br />

            <span className="text-[#C8A2C8]">

              <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={false}
              />

            </span>

          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-8">

            Discover premium fashion designed for luxury, elegance and everyday confidence.

          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">

            <div className="flex items-center w-full flex-1 bg-white/10 border border-white/40 rounded-full px-4 sm:px-5 py-3 sm:py-4 backdrop-blur-md">

              <FaSearch className="text-white mr-3 shrink-0" />

              <input
                type="text"
                placeholder="Search for dresses, shoes, hoodies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch()
                  }
                }}
                className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-300 text-sm sm:text-base"
              />

            </div>

            <button
              onClick={handleSearch}
              className="bg-[#7E5A9B] text-sm sm:text-lg text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full hover:bg-[#6A4687] transition cursor-pointer font-medium"
            >
              Find Clothes
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Hero