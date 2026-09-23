import React from 'react'
import { useSearchParams } from 'react-router-dom'
import products from '../data/products.json'
import { FaShoppingCart } from 'react-icons/fa'

function SearchResults({ addToCart }) {

    const [searchParams] = useSearchParams()
    const query = searchParams.get('query')

    const filteredProduct = products.filter(product => {
        const searhValue = query.toLowerCase()
        return product.name.toLowerCase().includes(searhValue) || product.category.toLowerCase().includes(searhValue) || product.price.toString().includes(searhValue)
    })
    console.log(query);
    console.log(filteredProduct);

    return (
        <section className='min-h-screen py-20 bg-[#F8F5FC]'>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>

                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-center'>
                    Search Results
                </h1>

                {filteredProduct.length === 0 ? (

                    <div className='text-center mt-16'>
                        <h2 className='text-2xl sm:text-3xl font-semibold text-gray-700'>
                            Product not found
                        </h2>

                        <p className='text-gray-500 mt-2'>
                            We couldn't find any product matching "{query}".
                        </p>
                    </div>

                ) : (

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>

                        {filteredProduct.map((product) => {

                            return (
                                <div
                                    key={product.id}
                                    className='bg-white rounded-lg p-4'
                                >

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className='w-full h-60 object-cover rounded-xl'
                                    />

                                    <h2 className='text-xl font-semibold mt-4'>
                                        {product.name}
                                    </h2>

                                    <p className='text-[#8259A3]'>
                                        {product.category}
                                    </p>

                                    <p>
                                        {product.rating < 3
                                            ? "⭐" : product.rating < 5 ? "⭐⭐" : product.rating < 7 ? "⭐⭐⭐" : product.rating < 9 ? "⭐⭐⭐⭐" : "⭐⭐⭐⭐⭐"
                                        }
                                    </p>

                                    <div className='flex justify-between items-center mt-4'>

                                        <p className='font-bold text-[#8259A3]'>
                                            ${product.price}
                                        </p>

                                        <button
                                            onClick={() => addToCart(product)}
                                            className='flex items-center gap-2 bg-[#8259A3] text-white px-4 py-2 rounded-lg hover:bg-[#70498f] transition cursor-pointer'
                                        >
                                            <FaShoppingCart />
                                            Add
                                        </button>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                )}

            </div>
        </section >



    )

}

export default SearchResults
