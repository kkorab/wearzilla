import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalState'

export default function CartTotal() {
    const [checkedRadio, setCheckedRadio] = useState()

    const {functionsContext, cartContext} = useContext(GlobalContext);
    const [getItem, handleDetails, addToCart, increment, decrement, removeItem, addTotals, addToWishlist, removeFromWishlist, clearCart] = functionsContext;


    return (
        <div className="shopping-card-total">
            <div className="container card-total-flex">
                <button onClick={() => clearCart()} className="btn">clear cart</button>
                <div className="shopping-card-total-price">
                <h5>total:<span className="card-total-price"> ${addTotals()}</span></h5>
                </div>
                <button className="btn btn-checkout">checkout</button>
            </div>
        </div>
    )
}
