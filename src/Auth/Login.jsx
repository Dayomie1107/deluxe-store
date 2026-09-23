import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('userToken')
        if (token) {
            navigate('/')
        }
    }, [navigate])

    const onSubmit = (data) => {
        setError('')

        axios.post("https://shop-backend-1-lrvx.onrender.com/api/auth/login", {
            email: data.email,
            password: data.password
        })
            .then(res => {
                console.log(res.data)
                localStorage.setItem("userToken", res.data.token || "logged_in")
                navigate('/')

            })
            .catch(err => {
                console.log(err)
                setError(err.response?.data?.message || "Invalid email or password")
            })
    }

    return (
        <div className='w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl'>
            <h2 className='text-center font-bold text-2xl sm:text-3xl text-gray-800'>Welcome Back</h2>
            <p className="text-sm sm:text-base text-center text-gray-500 mt-3">
                Login to continue shopping with DeluxeStore.
            </p>

            {error && <p className='text-red-500 text-xs text-center mt-3'>{error}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 sm:mt-10 space-y-6'>
                <div>
                    <label className="text-sm sm:text-base font-medium text-gray-700">
                        Email Address
                    </label>
                    <div className='text-sm sm:text-base mt-2 flex items-center border rounded-xl px-4 py-3 sm:py-4 focus-within:border-[#7E5A9B]'>
                        <FaEnvelope className='text-gray-400 mr-3' />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full outline-none'
                            {...register('email', { required: "Email is required" })}
                        />
                    </div>
                    {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                </div>

                <div>
                    <label className="text-sm sm:text-base font-medium text-gray-700">
                        Password
                    </label>
                    <div className="text-sm sm:text-base mt-2 flex items-center border rounded-xl px-4 py-3 sm:py-4 focus-within:border-[#7E5A9B]">
                        <FaLock className="text-gray-400 mr-3" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full outline-none"
                            {...register('password', { required: "Password is required" })}
                        />
                    </div>
                    {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                </div>

                <div className="flex justify-between items-center text-sm">
                    <label className="text-xs sm:text-sm flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" />
                        Remember Me
                    </label>

                    <Link
                        to="/forgot-password"
                        className="text-[#7E5A9B] cursor-pointer hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#7E5A9B] text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#6A4687] transition cursor-pointer"
                >
                    Log In
                </button>
            </form>

            <p className="text-center mt-6 sm:mt-8 text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                    to="/signup"
                    className="text-[#7E5A9B] font-semibold hover:underline"
                >
                    Sign Up
                </Link>
            </p>
        </div>
    )
}

export default Login