import React from "react";
import { PlusCircle, Star} from "react-feather";
import { products } from "../Assets/products";


const Newarrivals = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star key={i} fill={i < rating ? "  star gold" : "star"} stroke="gold" strokeWidth={2} />
            );
        }
        return stars;
    };
    const specificIds = ["10", "11", "12","13","14","15","20","21","22","23"];
    return(
       <div>
        <h2>NewArrivals</h2>
       
        <div className="container">
                <div className="row">
                    {
                     products.map((item,index)=>(
                        specificIds.includes(item.id) &&(

                        <div className="col-md-4">
                            <div className="card">
                            <button>{item.discount}</button>
                            <img src={item.imgUrl}/>
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
export default Newarrivals