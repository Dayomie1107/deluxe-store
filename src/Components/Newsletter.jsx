import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
function Newsletter() {
  return (
    <div>
      <section className="bg-[#7E5A9B] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">

          <p className="uppercase text-sm sm:text-base tracking-[5px] text-[#E9D8F4] font-semibold">
            Newsletter
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">
            Stay Updated
          </h2>

          <p className="text-gray-200 mt-6 text-sm sm:text-base md:text-lg leading-8">
            Subscribe to receive exclusive offers, fashion trends,
            and be the first to discover our newest collections.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

            <input
              type="email"
              placeholder="Enter your email address..."
              className=" w-full sm:w-[350px] md:w-[450px] px-6 py-4 rounded-full outline-none bg-white"
            />

            <button className="w-full sm:w-auto justify-center flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition cursor-pointer">
              <FaPaperPlane />
              Subscribe
            </button>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Newsletter
