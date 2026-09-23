import React from "react";
import { Outlet } from "react-router-dom";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import fashion from "/assets/fashion.png";

function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">


            <div
                className="relative min-h-[450px] lg:min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${fashion})`,
                }}
            >
                <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 lg:px-16 text-white">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Deluxe
                        <span className="text-[#C8A2C8]">Store</span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-6">
                        Welcome Back
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-6 text-gray-200 max-w-md">
                        Sign in to continue shopping with DeluxeStore.
                        Discover premium fashion designed for luxury,
                        elegance and everyday confidence.
                    </p>

                    <div className="mt-6 space-y-3 sm:space-y-4">

                        <div className="flex items-center gap-4">
                            <FaEnvelope />
                            <span>support@deluxestore.com</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaPhoneAlt />
                            <span>+234 800 123 4567</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt />
                            <span>Ibadan, Nigeria</span>
                        </div>

                    </div>

                    <div className="flex gap-6 mt-10 text-xl sm:text-2xl">

                        <FaFacebookF className="cursor-pointer hover:text-[#C8A2C8]" />

                        <FaInstagram className="cursor-pointer hover:text-[#C8A2C8]" />

                        <FaTwitter className="cursor-pointer hover:text-[#C8A2C8]" />

                    </div>

                </div>
            </div>

            <div className="min-h-screen bg-[#F8F5FC] p-6 sm:p-8 lg:p-10">
                <div className="w-full max-w-md mx-auto">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default AuthLayout;