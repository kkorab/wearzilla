import { GlobalContext } from '../../GlobalState'
import { motion } from 'framer-motion'
import React, { useContext, useState} from 'react'
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
    let {id, url, name, price, cName, inCart, inWishlist, size} = props.data;

    let detailsName = props.data.name;
    let correctedName = detailsName.replace(/\s/g, "-").toLowerCase();


    const [isSize, setIsSize] = useState(false);

    function getSize(e) {
        let newSize = e.target.value;
        size = newSize;
        setIsSize(false);
        addToCart(id, size)
    }

    return (
        <motion.div variants={trendingVariant} whileHover="hover" initial="hidden" className={cName} style={{backgroundImage: url}}>
            <div className="tredning-info" >
                <h1 className="trending-title">{name}</h1>
                <h4 className="trending-price">${price}</h4>
                <motion.button variants={btnVariant} onClick={inWishlist ? () => removeFromWishlist(id) : () => addToWishlist(id)} className="trending-wishlist-btn">
                    <i style={inWishlist ? {color: '#FF9985'} : null} className="far fa-heart"></i>
                </motion.button>
                {isSize? null : (<motion.div variants={cntVariant} className="trending-btns-cnt">
                    <button onClick={() => {
                        if (id==="trending-4") {
                            addToCart(id)
                        }
                        else {
                            setIsSize(true)
                        }}} 
                        className="trending-btn" disabled={inCart ? true : false}>{inCart ? "in cart" : "add to cart"}</button>
                    <Link to={`/details/${correctedName}`}>
                        <button 
                        onClick={() => handleDetails(id)}
                        className="trending-btn">Details</button>
                    </Link>
                </motion.div>)}
            </div>
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
        </motion.div>
    )
}
