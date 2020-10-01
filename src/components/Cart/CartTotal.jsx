import React from 'react'

export default function CartTotal() {
    return (
        <div className="shopping-cart-total">
            <div className="cart-total-header">
                <h2 className="shopping-cart-total-headline">Cart total</h2>
                <div className="subtotal">
                    <h3 className="shopping-cart-subtotal">Subtotal:</h3>
                    <h3 className="subtotal-price">$84.00</h3>
                </div>
                <div className="shipping">
                    <div className="shipping-row">
                        <label htmlFor="">
                        <input type="radio" name="shipping"/>Free shipping:
                        </label>
                        <h3 className="shipping-price">$0.00</h3>
                    </div>
                    <div className="shipping-row">
                        <label htmlFor="">
                        <input type="radio" name="shipping"/>Standard:
                        </label>
                        <h3 className="shipping-price">$10.00</h3>
                    </div>
                    <div className="shipping-row">
                        <label htmlFor="">
                        <input type="radio" name="shipping"/>Express:
                        </label>
                        <h3 className="shipping-price">$20.00</h3>
                    </div>
                </div>
            </div>
            <div className="total">
                <h3 className="total-text">Total:</h3>
                <h3 className="total-price">$84.00</h3>
            </div>
            <div className="checkout">
                <button className="checkout-btn">proceed to checkout</button>
            </div>
        </div>
    )
}
