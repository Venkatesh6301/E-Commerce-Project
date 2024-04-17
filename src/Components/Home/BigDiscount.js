import React from "react";
import { PlusCircle, Star} from "react-feather";
// import { products } from "../Assets/products";
import { discoutProducts } from "../Assets/products";
import { Link } from "react-router-dom";

const BigDiscount = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star key={i} fill={i < rating ? "  star gold" : "star"} stroke="gold" strokeWidth={2} />
            );
        }
        return stars;
    };
    return (
        <div>
            <h2>BigDiscount</h2>
            <div className="container">
                <div className="row">
                    {
                      discoutProducts.map((item,index)=>(
                        <div className="col-md-4">
                            
                            <div className="card">
                            <Link to={`/product/${item.id}`}>
                            <button style={{width:"70px",height:"30px" ,borderRadius:'5px',marginTop:'20px',marginLeft:'20px'}}>{item.discount}%off</button >
                            <img style={{width:'200px', height:'200px'}} src={item.imgUrl} alt=" "/>
                            <p>{item.productName}</p>
                            <div className="stars-container" style={{fill:"gold"}}>
                            {renderStars(item.rating)}
                           </div>
                           </Link>
                            <h2>${item.price}</h2>
                            <h2 className="position-absolute bottom-0 end-0 m-3" 
                            style={{borderRadius:"50px",width:"25px" }}><PlusCircle/></h2>
                            </div>
                        </div>
                      ))
                    }

                </div>
            </div>
        </div>
    )
}
export default BigDiscount