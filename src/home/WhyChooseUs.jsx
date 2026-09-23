import React from 'react'
import { FaMedal, FaLock, FaTruck } from 'react-icons/fa'
function WhyChooseUs() {
    return (

        <section className='bg-[#F8F5FC] py-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-4 md:px-8 lg:px-10'>
                <h2 className='text-center font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900'>Why Choose Us</h2>
                <p className='text-center text-sm sm:text-base md:text-lg text-gray-500 mt-3'>Premium fashion with exceptional service.</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14'>

                    <div className='bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 sm:p-8 text-center'> <FaTruck className='text-4xl sm:text-5xl text-[#7E5A9B] mx-auto mb-5' />

                        <h3 className='text-xl sm:text-2xl font-bold text-gray-800'>Fast Delivery</h3>

                        <p className='text-sm sm:text-base text-gray-500 mt-3'>Receive your orders quickly anywhere in the country.</p>


                    </div>

                    <div className='bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 sm:p-8 text-center'> <FaMedal
                        className='text-4xl sm:text-5xl text-[#7E5A9B] mx-auto mb-5' />

                        <h3 className='text:xl sm:text-2xl font-bold text-gray-800'>Premium Quality</h3>

                        <p className='text-sm sm:text-base text-gray-500 mt-3'>Carefully selected outfits made from quality materials.</p>


                    </div>

                    <div className='bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 sm:p-8 text-center'> <FaLock className='text:4xl sm:text-5xl text-[#7E5A9B] mx-auto mb-5' />

                        <h3 className='text-xl sm:text-2xl font-bold text-gray-800'>Secure Payment</h3>

                        <p className='text-sm sm:text-base text-gray-500 text-sm sm:text-base mt-3'>Shop confidently with safe and secure payment methods.</p>


                    </div>


                </div>
            </div>
        </section>

    )
}

export default WhyChooseUs
