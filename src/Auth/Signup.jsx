import React, { useState } from 'react'
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Signup() {
    const { register, watch, formState: { errors }, handleSubmit } = useForm()
    const [error, setError] = useState()
    const navigate = useNavigate()

    const password = watch('password')

    const onSubmit = (data) => {
        setError('')

        axios.post("https://shop-backend-1-lrvx.onrender.com/api/auth/signup", {
            name: data.name,
            email: data.email,
            password: data.password
        })
            .then(res => {
                console.log(res.data)
                navigate('/login')
            })
            .catch(err => {
                console.log(err);
                setError(err.response?.data?.message || "Something went wrong")
            })
    }

    return (
        <div className='w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-gray-800'>
                Create Account
            </h2>

            <p className='text-sm sm:text-base text-center text-gray-500 mt-2'>
                Join DeluxeStore and start shopping today.
            </p>

            {error && <p className='text-red-500 text-xs text-center mt-2'>{error}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-4 sm:space-y-5'>
                <div>
                    <label className='text-sm font-medium text-gray-700'>
                        Full Name
                    </label>
                    <div className='text-sm flex mt-1.5 items-center border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:border-[#7E5A9B]'>
                        <FaUser className='text-gray-400 mr-3' />
                        <input
                            type='text'
                            placeholder='Enter your full name'
                            className='w-full outline-none'
                            {...register('name', { required: "Name is required" })}
                        />
                    </div>
                    {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
                </div>

                <div>
                    <label className='text-sm font-medium text-gray-700'>
                        Email Address
                    </label>
                    <div className='text-sm flex mt-1.5 items-center border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:border-[#7E5A9B]'>
                        <FaEnvelope className='text-gray-400 mr-3' />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full outline-none'
                            {...register('email', { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" } })}
                        />
                    </div>
                    {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="text-sm mt-1.5 flex items-center border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:border-[#7E5A9B]">
                        <FaLock className="text-gray-400 mr-3" />
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full outline-none"
                            {...register('password', { required: "Password is required", validate: value => value.length >= 8 || "Password must be at least 8 characters long" })}
                        />
                    </div>
                    {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <div className="text-sm mt-1.5 flex items-center border rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus-within:border-[#7E5A9B]">
                        <FaLock className="text-gray-400 mr-3" />
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full outline-none"
                            {...register('confirmPassword', { required: "Confirm your password", validate: (value) => value === password || "Password doesn't match" })}
                        />
                    </div>
                    {errors.confirmPassword && <p className='text-red-500 text-xs mt-1'>{errors.confirmPassword.message}</p>}
                </div>

                <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" />
                    I agree to the Terms & Conditions
                </label>

                <button
                    type="submit"
                    className="text-sm sm:text-base w-full bg-[#7E5A9B] text-white py-3 sm:py-3.5 rounded-xl font-semibold cursor-pointer hover:bg-[#6A4687] transition"
                >
                    Create Account
                </button>
            </form>

            <p className="text-xs sm:text-sm text-center mt-6 text-gray-600">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-[#7E5A9B] font-semibold hover:underline"
                >
                    Log In
                </Link>
            </p>
        </div>
    )
}

export default Signup