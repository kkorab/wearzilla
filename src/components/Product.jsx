import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../GlobalState'

const btnsCntVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },
    hover: {
        opacity: 1,
        y: 0
    }
}

const frontVariant = {
    hover: {
        opacity: 1
    }
}

const wishlistVariant = {
    hidden: {
        opacity: 0,
        y: -50
    },
    hover: {
        opacity: 1,
        y: 0
    }
}

const cntVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },
    hover: {
        opacity: 1,
        y: 0
    }
}

const btnVariant = {
    hidden: {
        y: -50,
        opacity: 0
    },
    hover: {
        y: 0,
        opacity: 1
    }
}

const trendingVariant = {
    hover: {
        opacity: 1,
    }
}


export default function Product(props) {
    const {functionsContext, wishlistContext, cartContext} = useContext(GlobalContext);
    const [getItem, handleDetails, addToCart, increment, decrement, removeItem,addTotals, addToWishlist, removeFromWishlist] = functionsContext;
    const [cart, setCart] = cartContext;
    const [wishlist, setWishlist] = wishlistContext;

    const {id, url, category, name, price, priceBefore, trending, cName, sale, inCart, inWishlist} = props.data;
    let detailsName = props.data.name;
    let correctedName = detailsName.replace(/\s/g, "-").toLowerCase();
    return (
        <>
        <div className="arrival-item">
            <motion.div whileHover="hover" initial={frontVariant} className="arrival-front" style={{backgroundImage: `url(${url})`}}>
                <motion.button variants={wishlistVariant} initial="hidden"
                onClick={inWishlist ? () => removeFromWishlist(id) : () => addToWishlist(id)}
                className="trending-wishlist-btn">
                    <i style={inWishlist ? {color: '#FF9985'} : null} className="far fa-heart"></i>
                </motion.button>
                <motion.div variants={btnsCntVariant} initial="hidden" className="arrival-btns-cnt">
                <button onClick={() => {
                    addToCart(id)}} className="arrival-btn" disabled={inCart ? true : false}>{inCart ? "in cart" : "add to cart"}</button>
                <Link to={`/details/${correctedName}`}>
                    <button onClick={() => handleDetails(id)} className="arrival-btn">Details</button>
                </Link>     
                </motion.div>
            </motion.div>
            <div className="arrival-item-desc">
                <h4 className="arrival-item__category">{category}</h4>
                <h3 className="arrival-item__headline">{name}</h3>
                <h5 className="arrival-item__price">${price}</h5>
                {sale ? (<h5 className="arrival-item__price price-before">${priceBefore}</h5>) : null}
            </div>
        </div>
        </>
    )
}
