import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './home/About'
import Contact from './home/Contact'
import Login from './Auth/Login'
import AuthLayout from './Auth/AuthLayout'
import Signup from './Auth/Signup'
import Cart from './Components/Shop/Cart'
import MainLayout from './Components/MainLayout'
import Shop from './Components/Shop'
import SearchResults from './home/SearchResults'
import ForgotPassword from './Auth/ForgotPassword'
import Checkout from './Components/Shop/Checkout'
import Payment from './Components/Shop/Payment'
import OrderHistory from './Components/Shop/OrderHistory'
import Receipt from './Components/Shop/Receipt'


function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  const addToCart = (product) => {
    setCart(prevItem => {
      const existingItem = prevItem.find(item => item.id === product.id)

      if (existingItem)
        return prevItem.map(item => {
          return item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        })

      return [...prevItem, { ...product, quantity: 1 }]
    })
  }

  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
        .filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    )
  }

  return (
    <Routes>
      <Route element={<MainLayout cart={cart} />}>
        <Route path='/' element={<Home cart={cart} addToCart={addToCart} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />} />
        <Route path='/shop' element={<Shop addToCart={addToCart} />} />
        <Route path='/search' element={<SearchResults addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cart={cart} />} />
        <Route path='/payment' element={<Payment clearCart={clearCart} />} />
        <Route path='/orders' element={<OrderHistory />} />
        <Route path='/receipt/:orderId' element={<Receipt />} />
      </Route>

      <Route element={<AuthLayout />} >
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Route>

    </Routes>
  )
}

export default App