
import React from "react"
 //import Shopstyle from './Stylings/Shopstyle.module.css'
import Shopstyle from 'react'
import { useEffect,useState } from "react"
import { products } from "../Assets/products"
import { BiSearch } from "react-icons/bi"
import { RiStarSFill } from "react-icons/ri"
// import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { add } from "../Cartslice"
import '../Shop/Shop.css'
import { CiSearch } from "react-icons/ci";
 

const Shop = () => {
  const [category, setCategory] = useState('sofa')
  const [filteredProduct, setFilteredProduct] = useState([])

  useEffect(() => {
    const filteredProduct = products.filter(product => product.category === category)
    setFilteredProduct(filteredProduct)
  }, [category])

  const handleFilter = (value) => {
    setCategory(value)
    console.log(value)
  }
  const [data, setData] = useState(false)

  const dispatch = useDispatch()
  const { id } = useParams()
  const addtocart = (item) => {
    dispatch(add(item))
    setData(true)
   
  }
  return (
    <div>
      <div className="banner">
        <h1>product</h1>
      </div>

      <div >


        <div>
           <div > 
            <h2></h2>

          </div>
          <div style={{ marginTop: '100px' }}>
            <div className="row">
              <div className="col-md-4">
                
                  <select onChange={(e) => handleFilter(e.target.value)}>
                    <select background color ="lightblue"></select>
                    <option value='filter by category'>Filter By Category</option >
                    <option value='sofa'>Sofa</option>
                    <option value='chair'>Chair</option>
                    <option value='mobile'>Mobile</option>
                    <option value='wireless'>Wireless</option>
                  </select>
                

              </div>
              <div className="col-md-8">
                <span>
                  <input type="search" placeholder="Search..." onChange={e => handleFilter(e.target.value)} /><span className="CiSearch"><CiSearch /></span>
                </span>
              </div>
            </div>
            <div className="row mt-5">
              {filteredProduct.map((item) => (
                <div className="col-md-4 mt-3 mb-5" >
                  <div className="card" style={{ height: '500px', width: '350px' }}>
                    <div className="card-body">
                      <img src={item.imgUrl} alt={item.name} style={{ height: '250px', width: '200px' }} />
                      <h1>{item.productName}</h1>
                      <h6>{[...Array(5)].map(star => {
                        return <RiStarSFill size={30} className="fivestar" />
                      })
                      } {item.avgRating}ratings</h6>
                      <p> category: {item.category}</p>
                      <h4>${item.price}<button className="button"   onClick={() => { addtocart(item) }}> +</button></h4>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredProduct.length === 0 && <h1>No products found</h1>}
          </div>

        </div>
      </div>
     </div>
   )
  }
      export default Shop