import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Products from "./pages/products/Products"
import Cart from "./pages/cart/Cart"
import Fotter from './components/navbar/fotter/Fotter'
import ProductDetail from './pages/products/productDetail'
import ContactUs from './pages/contactus/ContactUs'
const App = () => {
  return (
    <>
       <Navbar/>   
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/products/cart" element={<Cart/>}/>
          <Route path="/products/:id/cart" element={<Cart/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes> 
        <Fotter/>
    </>
  )
}

export default App
