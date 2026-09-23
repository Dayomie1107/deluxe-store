import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert('Please fill in all the required information.')
      return
    }

    alert('Your message has been sent successfully!')

    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20'>

      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>
        Contact Us
      </h1>

      <p className='text-sm sm:text-base md:text-lg text-center text-gray-500 mt-4 max-w-2xl mx-auto leading-7'>
        We'd love to hear from you. Whether you have a question about our
        products, orders, or anything else, our team is ready to help.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 sm:mt-12 md:mt-16 gap-8 sm:gap-10 md:gap-12'>

        <div className='bg-gray-100 rounded-xl p-5 sm:p-6 md:p-8 lg:p-10'>

          <h2 className='text-xl sm:text-2xl font-bold text-[#7E5A9B] mb-6'>
            Get in Touch
          </h2>

          <div className='space-y-5 sm:space-y-6'>

            <div className='flex items-start gap-4 text-sm sm:text-base md:text-lg'>
              <FaPhoneAlt className='text-[#7E5A9B] mt-1 shrink-0' />
              <span>+234 905 315 4191</span>
            </div>

            <div className='flex items-start gap-4 text-sm sm:text-base md:text-lg'>
              <FaEnvelope className='text-[#7E5A9B] mt-1 shrink-0' />
              <span className='break-all'>
                support@deluxestore.com
              </span>
            </div>

            <div className='flex items-start gap-4 text-sm sm:text-base md:text-lg'>
              <FaMapMarkerAlt className='text-[#7E5A9B] mt-1 shrink-0' />
              <span>Ibadan, Oyo State, Nigeria</span>
            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-4 sm:space-y-5'
        >

          <input
            type='text'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Full Name'
            className='w-full border rounded-lg p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#7E5A9B]'
          />

          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email Address'
            className='w-full border rounded-lg p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#7E5A9B]'
          />

          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Subject'
            className='w-full border rounded-lg p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#7E5A9B]'
          />

          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder='Your Message'
            className='w-full border rounded-lg p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#7E5A9B]'
          ></textarea>

          <button
            type='submit'
            className='w-full sm:w-auto bg-[#7E5A9B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#6A4687] transition cursor-pointer'
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact