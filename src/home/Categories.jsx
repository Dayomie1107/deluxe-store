import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import categoriesData from "../data/categories.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Categories() {

    const navigate = useNavigate()
    const [category, setCategory] = useState()
    const handleCategory = (category) => {
        navigate(`/shop?category=${category}`)
    }

    const swiperRef = useRef(null);

    const categories = [
        "All",
        "Shirts",
        "Hoodies",
        "Jeans",
        "Shoes",
        "Bags",
        "Jackets"
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");



    return (
        <div>

            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

                    <p className="text-center uppercase tracking-[5px] text-[#7E5A9B] font-semibold">
                        Shop By Category
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-3">
                        Browse Our Collections
                    </h2>

                    <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mt-10 flex-wrap">

                        {categories.map((category) => (

                            <Link
                                key={category}
                                to={category === "All" ? "/shop" : `/shop?category=${category.toLowerCase()}`}
                                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full transition font-semibold

                                ${category === "All"
                                        ? "bg-[#7E5A9B] text-white"
                                        : "bg-gray-100 hover:bg-[#7E5A9B] hover:text-white"
                                    }`}
                            >
                                {category}
                            </Link>

                        ))}

                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 mt-16">

                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#7E5A9B] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6A4687] transition"
                        >
                            ←
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            className="w-full"
                        >
                            {categoriesData.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <Link
                                        to={`/shop?category=${product.name}`}
                                        className="group block"
                                    >
                                        <div onClick={() => handleCategory(product.name)}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-64 object-cover rounded-xl"
                                            />

                                            <p className="text-center mt-3 font-semibold">
                                                {product.name}
                                            </p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#7E5A9B] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#6A4687] transition"
                        >
                            →
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Categories;