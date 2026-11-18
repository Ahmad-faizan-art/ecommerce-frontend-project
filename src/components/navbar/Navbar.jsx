import React from "react"
import { NavLink } from "react-router-dom"
import Home from "../../pages/home/Home"
import Products from "../../pages/products/Products"
import ContactUs from "../../pages/contactus/ContactUs"
import "./Navbar.css"
const Navbar=()=>{
     return(
        <>
         <div className="container-fluid mt-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">MyShop</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/products">Products</NavLink>
            <NavLink className="nav-link" to="/Cart">Cart</NavLink>
            <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
          </div>
        </div>
      </nav>
    </div>
    </>
     )
}
export default Navbar;
