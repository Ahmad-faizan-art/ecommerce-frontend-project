import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
   const ProductDetail = () => {
    const[num,setNum]=useState(0);
    const[product,setProduct]=useState();
    const {id}=useParams();
       useEffect(()=>{
         const getProductDetail=async()=>{
           try{
             const{data} =await axios.get(`https://fakestoreapi.com/products/${id}`);
             setProduct(data);
           }catch(error){
             
           }
         };
      getProductDetail();
     }, [id]);
  return (
    <div className="container mt-3">
    <div className="row">
      <img src={product?.image} alt="" style={{height:"80vh",width:"100%"}} />
      <h2 style={{color:"red"}}>Title:{product?.title}</h2>
      <h5 style={{color:"red"}}>Description:{product?.description}</h5>
      <h5 style={{color:"red"}}>Price:{product?.price}</h5>
      <h5 style={{color:"red"}}>Rating:{product?.rating.rate}</h5>
      <div style={{width:"50%"}}>
        <h1>How much do you want to buy:{num}</h1>
        <button onClick={()=>setNum(num+1)} style={{width:"25%"}}>Increase</button>&nbsp;
       <button onClick={() => setNum(Math.max(0, num - 1))} style={{ width: "25%" }}>Decrease</button>
      </div><br/><br/>
      <Link to="cart"><button className="btn bg-dark text-white mt-3">Add to Cart</button></Link> 
    </div>
  </div>
  );
};
export default ProductDetail;
