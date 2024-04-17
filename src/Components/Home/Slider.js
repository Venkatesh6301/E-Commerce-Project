import React, { useState } from "react";
import { SliderData } from "../Assets/products";
// import Hoestyle from '../Stylings/Hoestyle.module.css'






const Slider=()=>{
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevSlide = () => {
        const newIndex = (activeIndex === 0) ? SliderData.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
    };
    const handleNextSlide = () => {
      const newIndex = (activeIndex === SliderData.length - 1) ? 0 : activeIndex + 1;
      setActiveIndex(newIndex);
  };
    return(
        <div>
            <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-inner">
       {SliderData.map((item, index) => (
           <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
               <div>
                   <div className="row">
                       <div className="col-md-6" style={{marginTop:"10%"}}>
                           <div>
                               <h2>{item.title}</h2>
                               <p >{item.desc}</p>
                               <button >Visit Collection</button>
                               </div>
                               
                           </div>
                           {/* <div className="col-md-4">
   
                           </div> */}



                           
                       
                       <div className="col-md-6" >
                           <img src={item.cover} className="d-block w-100" alt={item.title} style={{ width: "180%", height: "450px" }} />
                       </div>
                   </div>
               </div>
           </div>
       ))}
   </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={handlePrevSlide}
       style={{ color: "black" }}>
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={handleNextSlide}>
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
   </button>
</div>
</div>

 </div>
            
        
)
}
export default Slider




        