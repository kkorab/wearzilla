import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalState';

const variantChild = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
    }
}

export default function CartProduct(props) {
    const {functionsContext, location} = useContext(GlobalContext);
    const [, , addToCart, increment, decrement, removeItem, , , removeFromWishlist] = functionsContext;
    const {id, url, name, price, quantity, inCart} = props.data
    return (
        <AnimatePresence>
            <motion.div variants={variantChild} initial="hidden" animate="show" exit="hidden" className="card-product">
                <img className="card-product-img" src={url} alt="product pict"/>
                <div className="card-product-desc">
                    <h2 className="card-product-name">{name}</h2>
                    {location.pathname==="/cart" && 
                     <>
                        <h4 className="card-product-price">${price.toFixed(2)}</h4>
                        <h4 className="card-product-size">SIZE: M</h4>
                    </>}
                </div>
                {location.pathname==="/cart" && 
                <div className="card-btns-cnt">
                    <button onClick={() => {
                            decrement(id)
                        }}className="cart-increment-product">-
                    </button>
                    <span className="cart-quantity">{quantity}</span>
                    <button onClick={() => {
                        increment(id);
                    }} className="cart-decrement-product">+</button>
                </div>
                }
                <div className={location.pathname==='/wishlist' ? "wishlist-btns-cnt" : "card-bnts-cnt"}>
                    <button 
                    onClick={location.pathname === "/cart" ? () => {removeItem(id)} : () => {removeFromWishlist(id)} }
                    className="card-delete-item">Remove</button>
                    {location.pathname==="/wishlist" &&
                        <button onClick={() => {addToCart(id)}} 
                        className="add-item"
                        disabled={inCart ? true : false}
                        >{inCart ? "In cart" : "add to cart"}</button>
                    }
                </div>
            </motion.div>
        </AnimatePresence>
    )
}


