import React from 'react'
import "./Home.css"
import { products } from '../../data'
const Home = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="/imagefolder/img1.jpg" className="d-block w-100" alt="first image" style={{height:"60vh",width:"15vh"}}/>
    </div>
    <div className="carousel-item">
      <img src="/imagefolder/img2.jpg" className="d-block w-100" alt="..." style={{height:"60vh",width:"15vh"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   <br/>
      <div className="products">
        <div className="container">
          <div className="row">
            {
              products.map((product)=>{
                return(
                  <>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 product">
                       <img src={product.img}/><br/>
                       <h4>{product.catergorey}</h4>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home