import React from 'react'

export default function CartHeader() {
    return (
        <div className="cart-header">
            <h5 className="product-cart-header">Product</h5>
            <h5 className="product-cart-header product-cart-header-center">Price</h5>
            <h5 className="product-cart-header product-cart-header-center">Quantity</h5>
            <h5 className="product-cart-header product-cart-header-center">Total</h5>
        </div>
    )
}
