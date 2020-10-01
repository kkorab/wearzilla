import React from 'react'
import smallImage from '../../images/clothes/arrival/arrival-1.jpg'

export default function CartProduct() {
    return (
        <div className="cart-product-row">
            <div className="cart-product-desc">
                <img className="cart-product-img" src={smallImage} alt=""/>
                <h5 className="product-name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            </div>
            <div className="cart-product-price">
                <h5>$84.00</h5>
            </div>
            <div className="cart-product-quantity">
                <button className="cart-increment-product">-</button>
                <span className="cart-quantity">1</span>
                <button className="cart-decrement-product">+</button>
            </div>
            <div className="cart-product-total">
                <h5>$84.00</h5>
            </div>
            <button className="delete-btn">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    )
}
