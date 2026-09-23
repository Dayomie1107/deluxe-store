import React from 'react'
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = () => {
        console.log('submitted')
    }

    return (
        <div className='w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl'>
            <Link
                to="/login"
                className="inline-flex items-center text-sm text-gray-500 hover:text-[#7E5A9B] mb-6 transition"
            >
                <FaArrowLeft className="mr-2" /> Back to Login
            </Link>

            <h2 className='text-center font-bold text-2xl sm:text-3xl text-gray-800'>
                Reset Password
            </h2>
            <p className="text-sm sm:text-base text-center text-gray-500 mt-3">
                Enter your email address below and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-6'>
                <div>
                    <label className="text-sm sm:text-base font-medium text-gray-700">
                        Email Address
                    </label>
                    <div className='mt-2 flex items-center border rounded-xl px-4 py-3 sm:py-4 focus-within:border-[#7E5A9B]'>
                        <FaEnvelope className='text-gray-400 mr-3' />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-full outline-none'
                            {...register('email', { 
                                required: "Email is required", 
                                pattern: { 
                                    value: /^\S+@\S+$/i, 
                                    message: "Email is invalid" 
                                } 
                            })} 
                        />
                    </div>
                    {errors.email && (
                        <p className='text-red-500 text-sm mt-2'>{errors.email.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#7E5A9B] text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#6A4687] transition cursor-pointer"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    )
}

export default ForgotPassword