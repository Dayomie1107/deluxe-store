import React from 'react'
import about from '/assets/about.jpg'
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function About() {
    return (
        <section className='min-h-screen bg-cover bg-center bg-fixed'

            style={{

                backgroundImage: `linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.75)), url(${about})`,

            }
            } >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-20'>
                <h1 className='text-3xl sm:text-4xl md:5xl font-bold text-center text-white'>About Deluxe Store</h1>
                <p className='text-sm sm:text-base md:text-lg text-center text-gray-300 mt-5 max-w-3xl mx-auto leading-8'>Deluxe Store is a modern fashion brand dedicated to bringing luxury, comfort and confidence to your wardrobe. From premium shirts and hoodies to stylish shoes, bags, jeans and jackets, we carefully select every products to ensure quality and elegance.</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16'>
                    <div className='bg-gray-100 rounded-xl p-8'>
                        <h2 className='text-xl sm:text-2xl font-bold text-[#7E5A9B] text-center'>Our Mission</h2>
                        <p className='text-sm text-base mt-4 text-gray-600 leading-7'>Our mission is to make luxury fashion accessible to everyone by providing high quality products, excellent customer service, and a seamless shopping experience.</p>
                    </div>

                    <div className='bg-gray-100 rounded-xl p-8'>
                        <h2 className='text-xl sm:text-2xl font-bold text-[#7E5A9B]'>
                            Why Choose Us?
                        </h2>
                        <ul className='mt-4 text-gray-700 space-y-3'>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-yellow-500' />
                                Premium Quality Products
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-red-500' />
                                Affordable Luxury
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-purple-500' />
                                Fast & Reliable Delivery
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-orange-500' />
                                Secure Shopping Experince
                            </li>
                            <li className='flex items-center gap-2'>
                                <FaCheck className='text-green-500' />
                                Excellent Customer Support
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=' flex justify-center mt-16'>
                    <Link
                        to='/#categories'
                        className='inline-block bg-[#7E5A9B] text-white px-8 py-4 rounded-full hover:bg-[#6A4687] transition'>Shop With Us</Link>
                </div>


            </div>
        </section >

    )
}

export default About
