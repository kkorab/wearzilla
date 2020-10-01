import React from 'react'

export default function WishlistHeader() {
    return (
        <header className="wishlist-header">
            <h5 className="product-cart-header">Product</h5>
            <h5 className="product-cart-header product-cart-header-center">Price</h5>
            <h5 className="product-cart-header product-cart-header-center to-hide">Stock status</h5>
        </header>
    )
}
