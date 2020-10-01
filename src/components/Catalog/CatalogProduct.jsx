import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


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

export default function CatalogProduct(props) {
    const [inCart, setInCart] = useState(false);
    let detailsName = props.data.name;
    let correctedName = detailsName.replace(/\s/g, "-").toLowerCase();
    return (
        <>
            <div className="arrival-item">
                <motion.div whileHover="hover" initial={frontVariant} className="arrival-front" style={{backgroundImage: `url(${props.data.url})`}}>
                    <motion.button variants={wishlistVariant} initial="hidden"  className="trending-wishlist-btn">
                        <i className="far fa-heart"></i>
                    </motion.button>
                    <motion.div variants={btnsCntVariant} initial="hidden" className="arrival-btns-cnt">
                    <button onClick={() => {setInCart(!inCart)}} className="arrival-btn" disabled={inCart ? true : false}>{inCart ? "in cart" : "add to cart"}</button>
                    <Link to={`/details/${correctedName}`}>
                        <button className="arrival-btn">Details</button>
                    </Link>
                        
                    </motion.div>
                </motion.div>
                <div className="arrival-item-desc">
                    <h4 className="arrival-item__category">{props.data.category}</h4>
                    <h3 className="arrival-item__headline">{props.data.name}</h3>
                    <h5 className="arrival-item__price">${props.data.price}</h5>
                    {props.data.sale ? (<h5 className="arrival-item__price price-before">${props.data.priceBefore}</h5>) : null}
                    
                </div>
            </div>
        </>
    )
}
