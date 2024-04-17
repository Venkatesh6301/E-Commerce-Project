import { useParams } from "react-router-dom";
import { products } from "./Assets/products";
import './product.css'
import {  RiStarSFill } from "react-icons/ri";
import { add } from "./Cartslice";
import { useDispatch } from "react-redux";



const Product = (product) => {
  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()
  const productdetails = products.find((item) => item.id === id)
  const similarproduct = products.filter((item) => item.category === productdetails.category && item.id !== productdetails.id)
  console.log(productdetails)
  const handleAdd = (productdetails) => {
    dispatch(add(productdetails))
  }
  return (
    <div>
      {
        <div className="container product-layout">

          <div className="product-image">
            <img src={productdetails.imgUrl} alt=" " />
          </div>
          <div className="product-detail">
            <p>{productdetails.productName}</p>
            <span className="starts">{[...Array(5)].map(star => {
              return <RiStarSFill size={30} className="fivestar" />
            })}</span> <span style={{ marginLeft: "20px" }}>{productdetails.avgRating} rating</span>
            <p>
              <span className="price">${productdetails.price}</span> <span style={{ marginLeft: "20px" }}>category:{productdetails.category}</span>
            </p><br></br>
            <span>Lorem ipsum dolor sit amet consectetur adipiscing elit.Consequatur</span><br></br>
            <span>iure quas illo voluptates labore tempore!</span>
            <div>
              <button className="button-1">1</button><br></br>
              <button className="button-2" onClick={() => { handleAdd(productdetails) }}>Add To Cart</button>
            </div>
          </div>
        </div>
      }
      <div className="Description">
        <span>Description</span>
        <p>{productdetails.description}</p>
      </div>
      <div className="similaritem-heading">
        <h2>you might also like</h2>
      </div>
      <div className="similaritem-layout">
        {
          similarproduct.map((item, index) => (
            <div className="similaritem-card">
              
                <div className="similaritem-img">
                  <img src={item.imgUrl} alt=" " />
                </div>
                <div className="similaritem-detail">
                  <p>{item.productName}</p>
                  <span className="starts">{[...Array(5)].map(star => {
                    return <RiStarSFill size={30} className="fivestar" />
                  })}</span> <span style={{ marginLeft: "20px" }}></span>
                  <div className="bigdiscount-detail-last-part">
                    <p className="bigdiscount-detail-p2">${item.price}</p>
                    <button>+</button>
                  </div>
                </div>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Product