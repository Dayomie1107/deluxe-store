import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Checkout({ cart }) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
    })

    const subtotal = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
            alert('Please fill in all the required information.')
            return
        }

        navigate('/payment', {
            state: {
                cart,
                formData,
                subtotal,
            },
        })
    }

    return (
        <section className='min-h-screen bg-[#F8F5FC] py-8 lg:py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8'>
                    Checkout
                </h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>

                    
                    <div className='lg:col-span-2'>
                        <form
                            onSubmit={handleSubmit}
                            className='bg-white rounded-2xl shadow-sm p-5 sm:p-6 lg:p-8'
                        >
                            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6'>
                                Customer Information
                            </h2>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Full Name
                                    </label>

                                    <input
                                        type='text'
                                        name='fullName'
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder='Enter your full name'
                                        className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#7E5A9B]'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Email
                                    </label>

                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter your email'
                                        className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#7E5A9B]'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Phone Number
                                    </label>

                                    <input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='Enter your phone number'
                                        className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#7E5A9B]'
                                    />
                                </div>

                                <div className='sm:col-span-2'>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Delivery Address
                                    </label>

                                    <textarea
                                        name='address'
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder='Enter your delivery address'
                                        rows='4'
                                        className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#7E5A9B] resize-none'
                                    />
                                </div>

                            </div>

                            <div className='mt-8'>
                                <h2 className='text-xl font-bold text-gray-800 mb-4'>
                                    Payment Method
                                </h2>

                                <div className='border border-[#7E5A9B] bg-[#F8F5FC] rounded-xl p-4'>
                                    <div className='flex items-center gap-3'>
                                        <input
                                            type='radio'
                                            checked
                                            readOnly
                                            className='accent-[#7E5A9B]'
                                        />

                                        <div>
                                            <p className='font-semibold text-gray-800'>
                                                Paystack
                                            </p>

                                            <p className='text-sm text-gray-500'>
                                                Secure online payment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='w-full mt-8 bg-[#7E5A9B] text-white py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition cursor-pointer'
                            >
                                Continue to Payment
                            </button>

                            <Link
                                to='/cart'
                                className='block text-center mt-4 text-[#7E5A9B] font-semibold hover:underline'
                            >
                                Back to Cart
                            </Link>

                        </form>
                    </div>
   
                    <div className='lg:col-span-1'>
                        <div className='bg-white rounded-2xl shadow-sm p-5 sm:p-6 lg:sticky lg:top-6'>

                            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6'>
                                Order Summary
                            </h2>

                            <div className='space-y-4 mb-6'>
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className='flex items-center gap-3 border-b border-gray-200 pb-4'
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='w-16 h-16 object-cover rounded-lg'
                                        />

                                        <div className='flex-1'>
                                            <h3 className='font-semibold text-gray-800 text-sm'>
                                                {item.name}
                                            </h3>

                                            <p className='text-sm text-gray-500'>
                                                Quantity: {item.quantity}
                                            </p>
                                        </div>

                                        <p className='font-semibold text-[#7E5A9B]'>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-between border-b border-gray-200 pb-4'>
                                <p className='text-gray-600'>Subtotal</p>

                                <p className='font-bold text-gray-800'>
                                    ${subtotal.toFixed(2)}
                                </p>
                            </div>

                            <div className='flex justify-between py-4 border-b border-gray-200'>
                                <p className='text-gray-600'>Shipping</p>

                                <p className='text-green-600 font-semibold'>
                                    Free
                                </p>
                            </div>

                            <div className='flex justify-between items-center pt-5'>
                                <p className='text-lg font-bold text-gray-800'>
                                    Total
                                </p>

                                <p className='text-2xl font-bold text-[#7E5A9B]'>
                                    ${subtotal.toFixed(2)}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Checkout