import React from 'react'
import { useSearchParams } from 'react-router-dom'
import products from '../data/products.json'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import ScrollReveal from '../Components/ScrollReveal'
import PageTransition from '../Components/PageTransition'

function Shop({ addToCart, cart }) {

    const [searchParams] = useSearchParams()

    const category = searchParams.get("category")

    const filteredProduct = products.filter((product) => {

        return category
            ? product.category.toLowerCase() === category.toLowerCase()
            : true

    })

    return (
        <PageTransition>
            <section className='min-h-screen py-20 bg-[#F8F5FC]'>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>

                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>
                        Shop
                    </h1>

                    <p className='text-sm sm:text-base md:text-lg text-center text-gray-500 mt-4'>
                        Explore our collection of premium fashion products.
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>

                        {filteredProduct.map((product, index) => {

                            const isAdded = cart?.some(
                                (item) => item.id === product.id
                            )

                            return (

                                <ScrollReveal key={product.id} delay={index * 0.05}>
                                    <div
                                        className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300 h-full flex flex-col justify-between'
                                    >

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className='w-full h-60 sm:h-64 object-cover'
                                        />

                                        <div className='p-5 flex flex-col justify-between flex-grow'>

                                            <div>
                                                <h2 className='text-base sm:text-lg font-semibold'>
                                                    {product.name}
                                                </h2>

                                                <div className='flex text-yellow-400 mt-2'>

                                                    {Array(product.rating)
                                                        .fill()
                                                        .map((_, index) => (
                                                            <FaStar key={index} />
                                                        ))}

                                                </div>
                                            </div>

                                            <div className='flex items-center justify-between mt-3'>

                                                <p className='text-base sm:text-lg font-bold text-[#7E5A9B]'>
                                                    ${product.price}
                                                </p>

                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className={`text-white px-3 sm:px-4 py-2 rounded-lg transition flex items-center gap-2 text-sm sm:text-base cursor-pointer ${isAdded
                                                        ? 'bg-green-600'
                                                        : 'bg-[#7E5A9B] hover:bg-[#6A4687]'
                                                        }`}
                                                >

                                                    <FaShoppingCart />

                                                    {isAdded ? '✓ Added' : 'Add'}

                                                </button>

                                            </div>

                                        </div>

                                    </div>
                                </ScrollReveal>

                            )
                        })}

                    </div>

                </div>

            </section>
        </PageTransition>
    )
}

export default Shop