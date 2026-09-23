import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'

export default function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {

  const subtotal = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
  }, 0)

  return (
    <section className='min-h-screen bg-[#F8F5FC] py-6 sm:py-8 lg:py-10'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8'>
          Shopping Cart
        </h1>


        {cart.length === 0 ? (

          <div className='bg-white rounded-2xl shadow-sm p-6 sm:p-10 text-center max-w-md mx-auto'>

            <h2 className='text-xl sm:text-2xl font-semibold text-gray-700'>
              Your cart is empty
            </h2>

            <p className='text-gray-500 mt-2 text-sm sm:text-base'>
              Add some products to your cart or check your previous purchases in order history.
            </p>

            <div className='flex flex-col gap-3 mt-6'>

              <Link
                to='/orders'
                className='block w-full bg-[#7E5A9B] text-white py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition shadow-sm'
              >
                View Order History
              </Link>


              <Link
                to='/shop'
                className='block w-full border border-[#7E5A9B] text-[#7E5A9B] py-3 rounded-xl font-semibold hover:bg-[#F0EAF5] transition'
              >
                Go to Shop
              </Link>
            </div>

          </div>

        ) : (


          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>



            <div className='lg:col-span-2'>

              <div className='bg-white rounded-2xl shadow-sm overflow-hidden'>



                <div className='hidden lg:grid grid-cols-4 gap-4 bg-gray-100 px-6 py-4 font-semibold text-gray-700 sticky top-0 z-10'>

                  <p>Product</p>

                  <p>Product Name</p>

                  <p>Price</p>

                  <p>Quantity</p>

                </div>



                <div className='lg:max-h-[600px] lg:overflow-y-auto'>

                  {cart.map((item) => (

                    <div key={item.id}>



                      <div className='lg:hidden flex items-center gap-3 sm:gap-5 p-4 sm:p-5 border-b border-gray-200'>




                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl flex-shrink-0'
                        />


                        <div className='flex-1 min-w-0'>




                          <h3 className='font-semibold text-gray-800 text-sm sm:text-base break-words'>
                            {item.name}
                          </h3>




                          <p className='text-[#7E5A9B] font-bold mt-1 text-sm sm:text-base'>
                            ${item.price}
                          </p>



                          <div className='flex items-center gap-2 sm:gap-3 mt-3'>




                            <div className='flex items-center border rounded-lg overflow-hidden'>


                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className='w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-gray-100 cursor-pointer'
                              >
                                <FaMinus className='text-xs' />
                              </button>


                              <span className='w-8 sm:w-10 text-center font-semibold text-sm sm:text-base'>
                                {item.quantity}
                              </span>


                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className='w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-gray-100 cursor-pointer'
                              >
                                <FaPlus className='text-xs' />
                              </button>


                            </div>



                            <button
                              onClick={() => removeFromCart(item.id)}
                              className='text-red-500 hover:text-red-700 p-2 cursor-pointer'
                            >
                              <FaTrash />
                            </button>


                          </div>

                        </div>

                      </div>



                      <div className='hidden lg:grid grid-cols-4 gap-4 items-center px-6 py-5 border-b border-gray-200'>




                        <div>

                          <img
                            src={item.image}
                            alt={item.name}
                            className='w-20 h-20 object-cover rounded-xl'
                          />

                        </div>




                        <div>

                          <h3 className='font-semibold text-gray-800'>
                            {item.name}
                          </h3>

                        </div>




                        <div>

                          <p className='text-[#7E5A9B] font-bold'>
                            ${item.price}
                          </p>

                        </div>




                        <div className='flex items-center gap-3'>



                          <div className='flex items-center border rounded-lg overflow-hidden'>


                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className='w-9 h-9 flex items-center justify-center hover:bg-gray-100 cursor-pointer'
                            >
                              <FaMinus className='text-sm' />
                            </button>


                            <span className='w-10 text-center font-semibold'>
                              {item.quantity}
                            </span>


                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className='w-9 h-9 flex items-center justify-center hover:bg-gray-100 cursor-pointer'
                            >
                              <FaPlus className='text-sm' />
                            </button>


                          </div>



                          <button
                            onClick={() => removeFromCart(item.id)}
                            className='text-red-500 hover:text-red-700 p-2 cursor-pointer'
                          >
                            <FaTrash />
                          </button>


                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>




            <div className='lg:col-span-1 self-start'>


              <div className='bg-white rounded-2xl shadow-sm p-5 sm:p-6'>




                <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6'>
                  Cart Summary
                </h2>




                <div className='flex justify-between items-center border-b border-gray-200 pb-4'>

                  <p className='text-gray-600'>
                    Subtotal
                  </p>

                  <p className='font-bold text-gray-800'>
                    ${subtotal.toFixed(2)}
                  </p>

                </div>




                <div className='flex justify-between items-center py-4 border-b border-gray-200'>

                  <p className='text-gray-600'>
                    Shipping
                  </p>

                  <p className='text-green-600 font-semibold'>
                    Free
                  </p>

                </div>




                <div className='flex justify-between items-center pt-5'>

                  <p className='text-lg font-bold text-gray-800'>
                    Total
                  </p>

                  <p className='text-xl sm:text-2xl font-bold text-[#7E5A9B]'>
                    ${subtotal.toFixed(2)}
                  </p>

                </div>




                <Link
                  to='/checkout'
                  className='text-center block w-full mt-6 bg-[#7E5A9B] text-white py-3 rounded-xl font-semibold hover:bg-[#6A4687] transition cursor-pointer'
                >
                  Proceed to Checkout
                </Link>




                <Link
                  to='/orders'
                  className='block text-center mt-4 text-[#7E5A9B] font-semibold hover:underline'
                >
                  View Order History
                </Link>


              </div>

            </div>


          </div>

        )}

      </div>

    </section>
  )
}

