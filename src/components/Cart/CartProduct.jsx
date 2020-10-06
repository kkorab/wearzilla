import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalState';

const variantChild = {
    // hidden: {
    //     opacity: 0
    // },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

export default function CartProduct(props) {
    const {functionsContext, location} = useContext(GlobalContext);
    const [, , addToCart, increment, decrement, removeItem, , , removeFromWishlist] = functionsContext;
    let {id, url, name, price, quantity, inCart, size} = props.data;

    const [isSize, setIsSize] = useState(false);

    function getSize(e) {
        let newSize = e.target.value;
        size = newSize;
        setIsSize(false);
        addToCart(id, size)
    }

    
    
    return (
        <AnimatePresence>
                <motion.div variants={variantChild} key={id} initial="hidden" animate="show" exit="exit" className="card-product">
                    <div className="product-div">
                        <img className="card-product-img" src={url} alt="product pict"/>
                        {isSize ? 
                    <div className="choose-size">
                        <select onChange={(e) => getSize(e)} defaultValue="choose size"
                        className="select-size-product">
                            <option value="choose size" disabled hidden>Choose size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                : null}
                    
                    </div>
                    <div className="card-product-desc">
                        <h2 className="card-product-name">{name}</h2>
                        {location.pathname==="/cart" && 
                        <>
                            <h4 className="card-product-price">${price.toFixed(2)}</h4>
                            <h4 className="card-product-size">size: {size}</h4>
                        </>}
                    </div>
                    {location.pathname==="/cart" && 
                    <div className="card-btns-cnt">
                        <button onClick={() => {decrement(id)}}
                            className="cart-increment-product">-
                        </button>
                        <span className="cart-quantity">{quantity}</span>
                        <button onClick={() => {
                            increment(id);
                        }} className="cart-decrement-product">+</button>
                    </div>}
                    <div className={location.pathname==='/wishlist' ? "wishlist-btns-cnt" : "card-bnts-cnt"}>
                        <button 
                        onClick={location.pathname === "/cart" ? () =>  removeItem(id) : () => {removeFromWishlist(id)}}
                        className="card-delete-item">Remove</button>
                        {location.pathname==="/wishlist" &&
                            <button onClick={() => {setIsSize(true)}} 
                            className="add-item"
                            disabled={inCart ? true : false}
                            >{inCart ? "In cart" : "add to cart"}</button>}
                    </div> 
                </motion.div> : 
        </AnimatePresence>
    )
}


