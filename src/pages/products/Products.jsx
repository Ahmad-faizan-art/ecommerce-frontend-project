import React, { useState,useEffect } from 'react'
import axios from "axios"
import "./Products.css"
import { Link } from 'react-router-dom';
//import { products } from '../../data';
const Product = () => {
  const[product,setProduct]=useState([]);
  useEffect(()=>{
     const getAllProduct=async()=>{
    try{
        const response=await axios.get("https://fakestoreapi.com/products")
        setProduct(response.data)
    }
    catch(error){
      console.log("error")
    }
  }
   getAllProduct();
  },[])
  return (
    <>
      <div className="container">
         <div className="row">
           <h1 style={{textAlign:"center"}}>Products</h1>
           {
              product.map((product)=>(
                 <div  key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 product mt-3">
                   <Link to={`/products/${product.id}`} style={{textDecoration:"none",color:"black"}}>
                     <img src={product.image} alt="" />
                     <h1>ID:{product.id}</h1>
                     <h5 className="text-secondary">Category:{product.category}</h5>
                     <p>{product.title}</p>
                     <b><p>Price:{product.price}</p></b>
                   </Link>  
                    <Link to="cart"><button onClick={() => addToCart(product)}>Add to Cart</button></Link>
                 </div>
              ))
            }
         </div>
      </div>
    </>
  )
}

export default Product
