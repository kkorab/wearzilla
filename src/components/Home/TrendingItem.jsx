import { GlobalContext } from '../../GlobalState'
import { motion } from 'framer-motion'
import React, { useContext} from 'react'
import { Link } from 'react-router-dom'

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

export default function TrendingItem(props) {
    const {functionsContext} = useContext(GlobalContext);
    const [, handleDetails, addToCart, , , ,, addToWishlist, removeFromWishlist] = functionsContext;
    const {id, url, name, price, cName, inCart, inWishlist} = props.data;

    let detailsName = props.data.name;
    let correctedName = detailsName.replace(/\s/g, "-").toLowerCase();

    return (
        <motion.div variants={trendingVariant} whileHover="hover" initial="hidden" className={cName} style={{backgroundImage: url}}>
            <div className="tredning-info" >
                <h1 className="trending-title">{name}</h1>
                <h4 className="trending-price">${price}</h4>
                <motion.button variants={btnVariant} onClick={inWishlist ? () => removeFromWishlist(id) : () => addToWishlist(id)}className="trending-wishlist-btn">
                    <i style={inWishlist ? {color: '#FF9985'} : null} className="far fa-heart"></i>
                </motion.button>
                <motion.div variants={cntVariant} className="trending-btns-cnt">
                    <button onClick={() => {
                addToCart(id)}} className="trending-btn" disabled={inCart ? true : false}>{inCart ? "in cart" : "add to cart"}</button>
                    <Link to={`/details/${correctedName}`}>
                        <button 
                        onClick={() => handleDetails(id)}
                        className="trending-btn">Details</button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}
