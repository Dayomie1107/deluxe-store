import React, { useState, useEffect } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    setIsLoggedIn(false)
    setMenuOpen(false)
    navigate('/login')
  }

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-3 sm:px-5 md:px-8 lg:px-10 py-5 flex items-center justify-between'>


        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold tracking-wide'>
          Deluxe <span className='text-[#7E5A9B]'>Store</span>
        </h1>


        <ul className='hidden md:flex items-center md:gap-6 lg:gap-10 text-gray-700 font-semibold text-sm uppercase'>
          <li><Link to='/' className='cursor-pointer hover:text-[#7E5A9B] transition'>Home</Link></li>
          <li><Link to='/about' className='cursor-pointer hover:text-[#7E5A9B] transition'>About</Link></li>
          <li><Link to='/contact' className='cursor-pointer hover:text-[#7E5A9B] transition'>Contact</Link></li>
        </ul>


        <div className='hidden md:flex sm:gap-2 md:gap-4 lg:gap-6 items-center'>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className='font-semibold text-sm bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition cursor-pointer'
            >
              Log out
            </button>
          ) : (
            <>
              <Link to="/login" className='font-semibold text-sm hover:text-[#7E5A9B]'>Log in</Link>
              <Link to="/signup" className='bg-[#7E5A9B] text-white px-5 py-2 rounded-full hover:bg-[#6A4687]'>Sign Up</Link>
            </>
          )}

          <Link to="/cart" className='relative'>
            <FaShoppingBag
              size={18}
              className="cursor-pointer hover:text-[#7E5A9B]"
            />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cart ? cart.length : 0}
            </span>
          </Link>
        </div>


        <div className='flex md:hidden items-center gap-4'>
          <Link to="/cart" className='relative mr-1'>
            <FaShoppingBag
              size={18}
              className="cursor-pointer text-black hover:text-[#7E5A9B]"
            />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {cart ? cart.length : 0}
            </span>
          </Link>

          <button
            className='text-3xl text-gray-700'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

      </div>


      {menuOpen && (
        <div className='md:hidden bg-white shadow-lg border-t border-gray-100'>
          <div className='flex flex-col gap-5 px-5 py-6'>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white text-center py-3 rounded-lg font-semibold"
              >
                Log out
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#7E5A9B] text-white text-center py-3 rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar