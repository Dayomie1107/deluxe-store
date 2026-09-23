import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Payment({ clearCart }) {
    const location = useLocation()
    const navigate = useNavigate()

    const { cart, formData, subtotal } = location.state || {}

    if (!cart || !formData) {
        return (
            <section className='min-h-screen bg-[#F8F5FC] py-10'>
                <div className='max-w-3xl mx-auto px-4 text-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        No payment information found
                    </h1>
                    <p className='text-gray-500 mt-2'>
                        Please go back to Checkout and continue to Payment.
                    </p>
                    <Link
                        to='/checkout'
                        className='inline-block mt-6 bg-[#7E5A9B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition'
                    >
                        Go to Checkout
                    </Link>
                </div>
            </section>
        )
    }

    const handlePayment = () => {
        const orderNumber = 'ORD-' + Date.now()
        const paymentReference = 'PAY-' + Date.now()
        const currentDate = new Date().toLocaleDateString()

        const order = {
            orderNumber: orderNumber,
            date: currentDate,
            cart: cart,
            formData: formData,
            total: subtotal,
            paymentStatus: 'Successful',
            paymentReference: paymentReference,
        }

        const existingOrders =
            JSON.parse(localStorage.getItem('orders')) || []

        localStorage.setItem(
            'orders',
            JSON.stringify([...existingOrders, order])
        )
        if (clearCart) {
            clearCart()
        }

        navigate(`/receipt/${orderNumber}`, {
            state: {
                cart: cart,
                formData: formData,
                subtotal: subtotal,
                paymentStatus: 'Successful',
                paymentReference: paymentReference,
                orderNumber: orderNumber,
                date: currentDate,
            },
        })
    }

    return (
        <section className='min-h-screen bg-[#F8F5FC] py-8 lg:py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8'>
                    Payment
                </h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
                    <div className='lg:col-span-2'>
                        <div className='bg-white rounded-2xl shadow-sm p-5 sm:p-6 lg:p-8'>
                            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6'>
                                Payment Method
                            </h2>

                            <div className='border-2 border-[#7E5A9B] bg-[#F8F5FC] rounded-xl p-5'>
                                <div className='flex items-center gap-3'>
                                    <input
                                        type='radio'
                                        checked
                                        readOnly
                                        className='accent-[#7E5A9B]'
                                    />
                                    <div>
                                        <p className='font-bold text-gray-800'>
                                            Paystack
                                        </p>
                                        <p className='text-sm text-gray-500 mt-1'>
                                            Pay securely with your card or bank
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h2 className='text-xl font-bold text-gray-800 mb-4'>
                                    Delivery Information
                                </h2>

                                <div className='space-y-3 text-gray-600'>
                                    <p>
                                        <span className='font-semibold text-gray-800'>Name:</span>{' '}
                                        {formData.fullName}
                                    </p>
                                    <p>
                                        <span className='font-semibold text-gray-800'>Email:</span>{' '}
                                        {formData.email}
                                    </p>
                                    <p>
                                        <span className='font-semibold text-gray-800'>Phone:</span>{' '}
                                        {formData.phone}
                                    </p>
                                    <p>
                                        <span className='font-semibold text-gray-800'>Address:</span>{' '}
                                        {formData.address}
                                    </p>
                                </div>
                            </div>

                            <div className='mt-8 bg-gray-50 rounded-xl p-4'>
                                <p className='text-sm text-gray-600'>
                                    🔒 Your payment is processed securely. We do not store your card details.
                                </p>
                            </div>

                            <button
                                onClick={handlePayment}
                                className='w-full mt-8 bg-[#7E5A9B] text-white py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition cursor-pointer'
                            >
                                Pay ${(subtotal || 0).toFixed(2)}
                            </button>

                            <Link
                                to='/checkout'
                                className='block text-center mt-4 text-[#7E5A9B] font-semibold hover:underline'
                            >
                                Back to Checkout
                            </Link>
                        </div>
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
                                                Qty: {item.quantity}
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
                                    ${(subtotal || 0).toFixed(2)}
                                </p>
                            </div>

                            <div className='flex justify-between py-4 border-b border-gray-200'>
                                <p className='text-gray-600'>Shipping</p>
                                <p className='text-green-600 font-semibold'>Free</p>
                            </div>

                            <div className='flex justify-between items-center pt-5'>
                                <p className='text-lg font-bold text-gray-800'>Total</p>
                                <p className='text-2xl font-bold text-[#7E5A9B]'>
                                    ${(subtotal || 0).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment