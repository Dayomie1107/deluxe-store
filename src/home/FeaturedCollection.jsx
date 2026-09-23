import React from 'react'
import { FaStar, FaShoppingCart, } from 'react-icons/fa'
import jacket from '/assets/jacket.jpg'
import hoodie from '/assets/hoodie.jpg'
import bag from '/assets/bag.jpg'
import sneakers from '/assets/sneakers.jpg'
function FeaturedCollection({ addToCart }) {
    const featuredProducts = [{
        id: 101,
        image: hoodie,
        name: "Classic Hoodie",
        price: 89,
        rating: 5,
    },
    {
        id: 102,
        image: jacket,
        name: "Luxury Jacket",
        price: 120,
        rating: 5,
    },
    {
        id: 103,
        image: sneakers,
        name: "Premium Sneakers",
        price: 120,
        rating: 5,
    },
    {
        id: 104,
        image: bag,
        name: "Leather Bag",
        price: 99,
        rating: 5,
    },
    ]
    return (
        <div>
            <section className="bg-[#F8F5FC] py-20">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                    Featured Collection
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-center text-gray-500 mt-2">
                    Premium styles handpicked for you.
                </p>

                <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-8 lg:px-10">

                    {featuredProducts.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
                        >

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 sm:h2 object-cover"
                            />

                            <div className="p-5">

                                <h3 className="text-lg sm:text-xl font-semibold">
                                    {item.name}
                                </h3>

                                <div className="flex text-yellow-400 mt-2">
                                    {/* item.rating contains the number of stars for the product */}
                                    {Array(item.rating) //creates an array with with that many spaces
                                        .fill()  // prepares the array so react can loop through it
                                        .map((_, index) => ( //goes through each space and display one <FaStar
                                            <FaStar key={index} /> //index gives each star a unique identity so react can keep track of them 
                                        ))}
                                </div>

                                <p className="text-[#7E5A9B] font-bold mt-3">
                                    ${item.price}
                                </p>

                                <button
                                    onClick={() => addToCart(item)}
                                    className="mt-5 w-full bg-[#7E5A9B] text-white py-3 rounded-lg flex justify-center items-center gap-2 text-sm text-base hover:bg-[#6A4687] transition cursor-pointer">
                                    <FaShoppingCart />
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </section>


        </div>
    )
}

export default FeaturedCollection
