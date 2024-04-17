import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Home from "./Components/Home/Home"
import Shop from "./Components/Shop/Shop"
import User from "./Components/User/USer"
import Dummy from "./Components/Dummy"
import Product from './Components/Product'
// import Link from "./Components/Link"



const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<Dummy/>}/>
           <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Shop" element={<Shop/>}></Route>
         
            <Route path="/User" element={<User/>}></Route>
            <Route path="/product/:id" element={<Product/>}></Route>
             {/* <Route path="/Link" element={<Link/>}></Route>   */}
            
            
        </Routes>
        
    )
}
export default Routing