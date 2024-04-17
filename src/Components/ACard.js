import React from 'react'
import './acard.css'
import { RiStarSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
//import { toHaveFormValues } from '@testing-library/jest-dom/matchers'

const ACard = () => {
    const {imgUrl, productName,price} = values
    return(
        <div className='a_cards'>
           <Link style={{textDecoration:'none'}} to={`/product/${values.id}`}>

            <div className='acard-image_box'>
               <img src={imgUrl} alt=' '/>
            </div>
            <div className='details'>
              <p>{productName}</p>
              <span className='starts'>{[...Array(5)].map(star =>{
                return<RiStarSFill size={30} className='fivestar' />
              })}</span> <span style={{marginLeft:'20px'}}></span>
              <div className='bigdiscount-detail-last-part'>
                <p className='bigdiscount-detail-p2'>${price}</p>
                 <button>+</button>
              </div>
            </div>
           </Link>
        </div>
    )
}
export default ACard