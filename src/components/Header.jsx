import React from 'react'
import Cart from '../img/shopping-cart.svg'


export const Header =(props)=>{
    return(
    <header>
            <div className="headerleft">
                <h1>FRUIT STOR</h1>
            </div>
            <ul className="headerRight">
                <li onClick={props.onClickCart} >
                    <img className="cart" src={Cart} />
                </li>
            </ul>
        </header>
    )}