import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function Receipt() {
    const location = useLocation()
    const { orderId } = useParams()
    const [orderData, setOrderData] = useState(null)
    const [loading, setLoading] = useState(true)

    const isNewPurchase = location.state?.isNewPurchase || false

    useEffect(() => {
        try {
            if (location.state && location.state.cart && location.state.formData) {
                setOrderData({
                    cart: location.state.cart || [],
                    formData: location.state.formData || {},
                    subtotal: location.state.subtotal || location.state.total || 0,
                    paymentStatus: location.state.paymentStatus || 'Successful',
                    paymentReference: location.state.paymentReference || 'N/A',
                    orderNumber: location.state.orderNumber || orderId || 'N/A',
                    date: location.state.date || new Date().toLocaleDateString()
                })
                setLoading(false)
                return
            }

            const savedOrders = JSON.parse(localStorage.getItem('orders')) || []
            const foundOrder = savedOrders.find(
                (o) => String(o.orderNumber) === String(orderId)
            )

            if (foundOrder) {
                setOrderData({
                    cart: foundOrder.cart || [],
                    formData: foundOrder.formData || {},
                    subtotal: foundOrder.total || 0,
                    paymentStatus: foundOrder.paymentStatus || 'Successful',
                    paymentReference: foundOrder.paymentReference || 'N/A',
                    orderNumber: foundOrder.orderNumber || orderId,
                    date: foundOrder.date || new Date().toLocaleDateString()
                })
            } else if (savedOrders.length > 0) {
                const latest = savedOrders[savedOrders.length - 1]
                setOrderData({
                    cart: latest.cart || [],
                    formData: latest.formData || {},
                    subtotal: latest.total || 0,
                    paymentStatus: latest.paymentStatus || 'Successful',
                    paymentReference: latest.paymentReference || 'N/A',
                    orderNumber: latest.orderNumber || 'N/A',
                    date: latest.date || new Date().toLocaleDateString()
                })
            }
        } catch (err) {
            console.error("Error loading receipt details:", err)
        } finally {
            setLoading(false)
        }
    }, [location.state, orderId])

    const handlePrint = () => {
        window.print()
    }

    if (loading) {
        return (
            <div className='min-h-screen bg-[#F8F5FC] flex items-center justify-center'>
                <p className='text-gray-600 font-semibold'>Loading receipt...</p>
            </div>
        )
    }

    if (!orderData || !orderData.cart || orderData.cart.length === 0) {
        return (
            <section className='min-h-screen bg-[#F8F5FC] py-10 flex items-center justify-center'>
                <div className='max-w-md w-full mx-auto px-4 text-center'>
                    <div className='bg-white rounded-2xl shadow-sm p-8'>
                        <h1 className='text-2xl font-bold text-gray-800'>
                            Receipt Not Found
                        </h1>
                        <p className='text-gray-500 mt-2'>
                            No order information is available for this session.
                        </p>
                        <Link
                            to='/shop'
                            className='inline-block mt-6 bg-[#7E5A9B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition'
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    const {
        cart = [],
        formData = {},
        subtotal = 0,
        paymentStatus = 'Successful',
        paymentReference = 'N/A',
        orderNumber = '',
        date = new Date().toLocaleDateString()
    } = orderData

    const safeSubtotal = Number(subtotal) || 0

    return (
        <section className='min-h-screen bg-[#F8F5FC] py-8 lg:py-12 print:p-0 print:m-0 print:bg-white print:min-h-0'>
            <style>
                {`
                @media print {
                    @page {
                        size: A4 portrait;
                        margin: 12mm;
                    }
                    html, body {
                        height: 100%;
                        background: #ffffff !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .receipt-printable-area {
                        border: none !important;
                        box-shadow: none !important;
                        padding: 0 !important;
                        width: 100% !important;
                    }
                    .no-print {
                        display: none !important;
                    }
                }
                `}
            </style>

            <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0 print:max-w-none'>

                
                {isNewPurchase ? (
                    <div className='text-center mb-8 no-print'>
                        <div className='w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center'>
                            <span className='text-3xl text-green-600'>✓</span>
                        </div>
                        <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mt-4'>
                            Payment Successful
                        </h1>
                        <p className='text-gray-500 mt-2'>
                            Thank you for your purchase!
                        </p>
                    </div>
                ) : (
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 no-print'>
                        <div>
                            <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>
                                Order Receipt
                            </h1>
                            <p className='text-gray-500 text-sm mt-1'>
                                Transaction reference: #{orderNumber || orderId}
                            </p>
                        </div>
                        <button
                            onClick={handlePrint}
                            className='self-start sm:self-auto bg-[#7E5A9B] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#6A4687] transition shadow-sm flex items-center gap-2 cursor-pointer'
                        >
                            🖨️ Print Receipt
                        </button>
                    </div>
                )}

                
                <div className='receipt-printable-area bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 overflow-hidden'>

                    <div>
                        
                        <div className='flex justify-between items-start border-b border-gray-200 pb-6'>
                            <div>
                                <h2 className='text-3xl font-extrabold text-[#7E5A9B] tracking-tight'>
                                    DeluxeStore
                                </h2>
                                <p className='text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1'>
                                    Official Sales Receipt
                                </p>
                            </div>
                            <div className='text-right'>
                                <p className='text-xs uppercase tracking-wider text-gray-400 font-bold'>
                                    Order ID
                                </p>
                                <p className='font-bold text-gray-800 text-base'>
                                    #{orderNumber || orderId || 'N/A'}
                                </p>
                                <p className='text-xs text-gray-500 mt-0.5'>{date}</p>
                            </div>
                        </div>

                        
                        <div className='py-6 border-b border-gray-200'>
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
                                Customer Details
                            </p>
                            <div className='grid grid-cols-2 gap-y-3 gap-x-6 text-sm'>
                                <div>
                                    <span className='text-gray-400 block text-xs'>Customer Name</span>
                                    <span className='font-semibold text-gray-800'>
                                        {formData.fullName || 'N/A'}
                                    </span>
                                </div>
                                <div>
                                    <span className='text-gray-400 block text-xs'>Email</span>
                                    <span className='font-semibold text-gray-800 break-words'>
                                        {formData.email || 'N/A'}
                                    </span>
                                </div>
                                <div>
                                    <span className='text-gray-400 block text-xs'>Phone</span>
                                    <span className='font-semibold text-gray-800'>
                                        {formData.phone || 'N/A'}
                                    </span>
                                </div>
                                <div>
                                    <span className='text-gray-400 block text-xs'>Shipping Address</span>
                                    <span className='font-semibold text-gray-800'>
                                        {formData.address || 'N/A'}
                                    </span>
                                </div>
                            </div>
                        </div>

        
                        <div className='py-6'>
                            <p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
                                Order Items
                            </p>
                            <table className='w-full text-left border-collapse'>
                                <thead>
                                    <tr className='border-b border-gray-200 text-xs text-gray-400 uppercase tracking-wider'>
                                        <th className='pb-2 font-semibold'>Item Description</th>
                                        <th className='pb-2 font-semibold text-center'>Qty</th>
                                        <th className='pb-2 font-semibold text-right'>Price</th>
                                        <th className='pb-2 font-semibold text-right'>Amount</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-100 text-sm'>
                                    {cart.map((item, index) => {
                                        const price = Number(item.price) || 0
                                        const qty = Number(item.quantity) || 1
                                        return (
                                            <tr key={item.id || index}>
                                                <td className='py-3 font-medium text-gray-800'>
                                                    {item.name || 'Product'}
                                                </td>
                                                <td className='py-3 text-center text-gray-600'>
                                                    {qty}
                                                </td>
                                                <td className='py-3 text-right text-gray-600'>
                                                    ${price.toFixed(2)}
                                                </td>
                                                <td className='py-3 text-right font-semibold text-gray-800'>
                                                    ${(price * qty).toFixed(2)}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    
                    <div className='border-t border-gray-200 pt-4 mt-4'>
                        <div className='flex justify-between items-end'>
                            <div className='text-xs text-gray-500 space-y-1'>
                                <p>
                                    <span className='font-semibold text-gray-700'>Payment Method:</span> Online Payment
                                </p>
                                <p>
                                    <span className='font-semibold text-gray-700'>Status:</span>{' '}
                                    <span className='text-green-600 font-bold uppercase'>
                                        {paymentStatus}
                                    </span>
                                </p>
                                <p className='font-mono text-[11px] text-gray-400'>
                                    Ref: {paymentReference}
                                </p>
                            </div>

                            <div className='w-48 text-right'>
                                <div className='flex justify-between py-1 text-xs text-gray-600'>
                                    <span>Subtotal</span>
                                    <span className='font-semibold text-gray-800'>
                                        ${safeSubtotal.toFixed(2)}
                                    </span>
                                </div>
                                <div className='flex justify-between py-1 text-xs text-gray-600'>
                                    <span>Shipping</span>
                                    <span className='text-green-600 font-semibold'>Free</span>
                                </div>
                                <div className='flex justify-between py-2 border-t border-gray-200 mt-1 font-bold text-base text-gray-900'>
                                    <span>Total</span>
                                    <span className='text-[#7E5A9B]'>
                                        ${safeSubtotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='text-center border-t border-gray-100 pt-3 mt-4'>
                            <p className='text-xs text-gray-400 italic'>
                                Thank you for shopping with DeluxeStore!
                            </p>
                        </div>
                    </div>

                </div>

        
                <div className='flex flex-col sm:flex-row gap-4 mt-6 no-print'>
                    <Link
                        to='/orders'
                        className='flex-1 text-center bg-[#7E5A9B] text-white py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition shadow-sm'
                    >
                        ← Back to Order History
                    </Link>
                    <Link
                        to='/shop'
                        className='flex-1 text-center border border-[#7E5A9B] text-[#7E5A9B] py-3 rounded-xl font-semibold hover:bg-[#F0EAF5] transition'
                    >
                        Continue Shopping
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Receipt