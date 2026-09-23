import React from 'react'
import { Link } from 'react-router-dom'

function OrderHistory() {

  const orders = JSON.parse(localStorage.getItem('orders')) || []

  return (
    <section className='min-h-screen bg-[#F8F5FC] py-8 lg:py-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>

        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8'>
          Order History
        </h1>

        {orders.length === 0 ? (

          <div className='bg-white rounded-2xl shadow-sm p-8 sm:p-12 text-center'>

            <h2 className='text-xl sm:text-2xl font-bold text-gray-800'>
              No Orders Yet
            </h2>

            <p className='text-gray-500 mt-2'>
              Your previous purchases will appear here.
            </p>

            <Link
              to='/shop'
              className='inline-block mt-6 bg-[#7E5A9B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition'
            >
              Start Shopping
            </Link>

          </div>

        ) : (

          <div className='space-y-5'>

            {orders.map((order, index) => (

              <div
                key={order.orderNumber || index}
                className='bg-white rounded-2xl shadow-sm p-5 sm:p-6'
              >

                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-200 pb-4'>

                  <div>
                    <p className='text-sm text-gray-500'>
                      Order Number
                    </p>

                    <p className='font-bold text-gray-800'>
                      {order.orderNumber}
                    </p>
                  </div>

                  <div>
                    <p className='text-sm text-gray-500'>
                      Date
                    </p>

                    <p className='font-semibold text-gray-800'>
                      {order.date}
                    </p>
                  </div>

                  <div>
                    <p className='text-sm text-gray-500'>
                      Payment Status
                    </p>

                    <p className='font-semibold text-green-600'>
                      {order.paymentStatus}
                    </p>
                  </div>

                </div>

                <div className='py-5 space-y-4'>

                  {order.cart && order.cart.map((item, itemIdx) => (

                    <div
                      key={item.id || itemIdx}
                      className='flex items-center gap-4'
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-16 h-16 object-cover rounded-xl flex-shrink-0'
                      />

                      <div className='flex-1 min-w-0'>

                        <h3 className='font-semibold text-gray-800'>
                          {item.name}
                        </h3>

                        <p className='text-sm text-gray-500'>
                          Quantity: {item.quantity}
                        </p>

                      </div>

                      <p className='font-bold text-[#7E5A9B]'>
                        ${((Number(item.price) || 0) * (item.quantity || 1)).toFixed(2)}
                      </p>

                    </div>

                  ))}

                </div>

                <div className='border-t border-gray-200 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

                  <div>
                    <p className='text-sm text-gray-500'>
                      Total Paid
                    </p>

                    <p className='text-xl font-bold text-[#7E5A9B]'>
                      ${(Number(order.total) || 0).toFixed(2)}
                    </p>
                  </div>

                  
                  <Link
                    to={`/receipt/${order.orderNumber}`}
                    state={{
                      cart: order.cart,
                      formData: order.formData,
                      subtotal: order.total,
                      paymentStatus: order.paymentStatus,
                      paymentReference: order.paymentReference,
                      orderNumber: order.orderNumber,
                      date: order.date
                    }}
                    className='text-center bg-[#7E5A9B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition'
                  >
                    View Receipt
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </section>
  )
}

export default OrderHistory