import React from 'react'
import { serviceData } from '../Assets/products'



const Card=()=>{
    return(
        <div>
            <div className='container'>
             <div className='row'>
               {
                serviceData.map((item,index)=>(
                    <div className='col-md-3 mb-5'>
                        <div className='card service' style={{background:`${item.bg}`}}>
                         <div className='card-body'>
                          <img src={item.icon}/>
                          <h3>{item.title}</h3>
                          <p>{item.subtitle}</p>
                         </div>
                        </div>
                        </div>

            ))
               }
             </div>
            </div>
        </div>
    )
}
export default Card