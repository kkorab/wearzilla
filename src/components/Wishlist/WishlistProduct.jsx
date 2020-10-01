import React from 'react'

import smallImage from '../../images/clothes/arrival/arrival-1.jpg'

export default function WishlistProduct() {
    return (
        <div className="wishlist-row">
        <div className="cart-product-desc">
            <img className="cart-product-img" src={smallImage} alt=""/>
            <h5 className="product-name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className="cart-product-price">
            <h5>$84.00</h5>
        </div>
        <h4 className="wishlist-stockstatus to-hide">
            In stock
        </h4>
        <button className="delete-btn">
            <i class="far fa-trash-alt"></i>
        </button>
        <button className="add-to-cart">
            <i class="fas fa-shopping-cart wishlist-icon"></i> <span className="to-hide">add to cart</span>
        </button>
    </div>
    )
}
