import React from "react";
import { PlusCircle, Star} from "react-feather";
import { products } from "../Assets/products";
// import { discoutProducts } from "../Assets/products";


const BestSales = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star key={i} fill={i < rating ? "  star gold" : "star"} stroke="gold" strokeWidth={2} />
            );
        }
        return stars;
    };
    const salesid = ["01", "02", "03", "26", "04", "05","06","27"];
    return(
        <div>
            <h2>BestSales</h2>
            <div className="container">
                <div className="row">
                    {
                      products.map((item,index)=>(
                        salesid.includes(item.id) &&(
                        <div className="col-md-4">
                            <div className="card">
                            <button>{item.discount}</button>
                            <img src={item.imgUrl} alt=""/>
                            <p>{item.productName}</p>
                            <div className="stars-container" style={{fill:"gold"}}>
                            {renderStars(item.rating)}
                           </div>
                            <h2>${item.price}</h2>
                            <h2 className="position-absolute bottom-0 end-0 m-3" 
                            style={{borderRadius:"50px",width:"25px" }}><PlusCircle/></h2>
                            </div>
                        </div>
                      )))
                    }

                </div>
            </div>
        </div>
    )
}
export default BestSales