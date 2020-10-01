import { motion } from 'framer-motion'
import React, { useState} from 'react'
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
    const [color, setColor] = useState(false);
    const [inCart, setInCart] = useState(false);
    const {price, cName, name, url} = props.data;
    let detailsName = props.data.name;
    let correctedName = detailsName.replace(/\s/g, "-").toLowerCase();

    return (
        <motion.div variants={trendingVariant} whileHover="hover" initial="hidden" className={cName} style={{backgroundImage: url}}>
            <div className="tredning-info" >
                <h1 className="trending-title">{name}</h1>
                <h4 className="trending-price">${price}</h4>
                <motion.button variants={btnVariant} onClick={() => setColor(!color)}className="trending-wishlist-btn">
                    <i style={{color: `${color ? "#FFC2CE" : "white" }`}} className="far fa-heart "></i>
                </motion.button>
                <motion.div variants={cntVariant} className="trending-btns-cnt">
                    <button onClick={() => {setInCart(!inCart)}} className="trending-btn" disabled={inCart ? true : false}>{inCart ? "in cart" : "add to cart"}</button>
                    <Link to={`/details/${correctedName}`}>
                        <button className="trending-btn">Details</button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}
