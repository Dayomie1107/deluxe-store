import React from 'react'
import fashion from '/assets/fashion.png'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer
            className="relative bg-cover bg-no-repeat bg-center sm:bg-fixed py-16 lg:py-20 bg-gray-900"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${fashion})`,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 text-white">

                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        Deluxe <span className="text-[#C8A2C8]">Store</span>
                    </h1>

                    <p className="text-sm sm:text-base mt-6 text-gray-200 leading-7 sm:leading-8">
                        Luxury fashion made for confidence, elegance and everyday comfort.
                        Discover timeless pieces you'll love wearing.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <FaFacebookF className="text-xl sm:text-2xl cursor-pointer hover:text-[#C8A2C8] transition" />
                        <FaInstagram className="text-xl sm:text-2xl cursor-pointer hover:text-[#C8A2C8] transition" />
                        <FaTwitter className="text-xl sm:text-2xl cursor-pointer hover:text-[#C8A2C8] transition" />
                        <FaLinkedinIn className="text-xl sm:text-2xl cursor-pointer hover:text-[#C8A2C8] transition" />
                    </div>
                </div>

                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                        Shop
                    </h2>

                    <ul className="space-y-3 sm:space-y-4 text-gray-200">
                        <li className="hover:text-white cursor-pointer transition">Men</li>
                        <li className="hover:text-white cursor-pointer transition">Women</li>
                        <li className="hover:text-white cursor-pointer transition">Accessories</li>
                        <li className="hover:text-white cursor-pointer transition">New Arrivals</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                        Company
                    </h2>

                    <ul className="space-y-3 sm:space-y-4 text-gray-200">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">Contact</li>
                        <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                        Contact
                    </h2>

                    <div className="space-y-4 sm:space-y-5">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[#C8A2C8] shrink-0" />
                            <span className="text-gray-200 text-sm sm:text-base">
                                support@deluxestore.com
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#C8A2C8] shrink-0" />
                            <span className="text-gray-200 text-sm sm:text-base">
                                +234 905 315 4191
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#C8A2C8] shrink-0" />
                            <span className="text-gray-200 text-sm sm:text-base">
                                Ibadan, Nigeria
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/20 mt-12 sm:mt-16 pt-8 max-w-7xl mx-auto px-4">
                <p className="text-sm sm:text-base text-center text-gray-300">
                    © 2026 DeluxeStore. All Rights Reserved.
                </p>
            </div>

        </footer>
    )
}

export default Footer