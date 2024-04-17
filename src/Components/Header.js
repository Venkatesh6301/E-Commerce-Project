import React from 'react'
import {ShoppingBag, ShoppingCart, User} from 'react-feather'
import '../Styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
          <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        <img src="https://www.achieversit.com/assets/images/logo-white.png"/>
                    </a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/Home" class="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Shop" class="nav-link active" aria-current="page" >shop</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Cart" class="nav-link active" aria-current="page" >cart</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/User" class="nav-link active" aria-current="page" ><User/></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Cart" class="nav-link active" aria-current="page" ><ShoppingCart/></Link>
                        </li>
                        
                        </ul>
                </div>
              </nav>
          </div>
        </>
       )

     }
export default Header