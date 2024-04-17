import React, { useState, useEffect } from "react"
import '../Styles/cart.css'
import { useDispatch, useSelector } from "react-redux"
import { remove } from "../Redux/CartSlice"



const Cart = () => {
    const cartData = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    console.log(cartData)
    const [quantities, setQuantities] = useState(
        cartData.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const handleChange = (id, change) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 0) + change
        }));
    };
    const handleRemove = (id) => {
        dispatch(remove(id))
    };

    const [count, setCount] = useState(1)
    const [cartcount, setCartcount] = useState()
    useEffect(() => {
        setCartcount(cartData.length);
    }, [cartcount])


    const Totalprice = () => {
        return cartData.reduce((total, item) => {
            const itemTotal = item.price * (quantities[item.id] || 0);
            return total + itemTotal
        }, 0).toFixed(2);
    };

    return (
        <div style={{ backgroundColor: 'lightgray' }}>
            <div className="container cart-layout">
                <div className="row cart-row-layout">
                    <div className="col-md-8 mt-5 cart-left-part">
                        <div className="row cart-left-part-row">
                            {
                                cartData && cartData.length > 0 ? (
                                    cartData.map((item) => (
                                        <>

                                            <div className="col-md-6">
                                                <img style={{ width: '200px', height: '200px' }} src={item.imgUrl} alt=" " />
                                            </div>
                                            <div className="col-md-3">
                                                <h3>{item.productName}</h3>
                                                <p>${item.price}.00*{quantities[item.id] || 0} = ${item.price * (quantities[item.id] || 0)}.00</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h3 onClick={() => { handleRemove(item.id) }}>X</h3>
                                                <span><button onClick={() => { handleChange(item.id, 1) }}>+</button></span>  <span><button onClick={() => { handleChange(item.id, -1) }}>-</button></span>
                                            </div>

                                        </>
                                    ))) : <p>Please add some product</p>
                            }
                        </div>
                    </div>
                    <div className="col-md-4  mt-5 cart-right-part">
                        <h3>Cart Summary</h3>
                        <p>Total Price:</p>
                        <h3>${Totalprice()}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Cart
