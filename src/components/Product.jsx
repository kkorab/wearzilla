import { motion } from 'framer-motion'
import React, { useContext, useState} from 'react'
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


export default function Product(props) {
    const {functionsContext} = useContext(GlobalContext);
    const [, handleDetails, addToCart, , , ,, addToWishlist, removeFromWishlist] = functionsContext;
    let {id, url, category, name, price, priceBefore, sale, inCart, inWishlist, size} = props.data;
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
        <>
        <div className="arrival-item">
            <motion.div whileHover='hover' initial={frontVariant} className="arrival-front" style={{backgroundImage: `url(${url})`}}>
                <motion.button variants={wishlistVariant} initial="hidden"
                onClick={inWishlist ? () => removeFromWishlist(id) : () => addToWishlist(id)}
                className="trending-wishlist-btn">
                    <i style={inWishlist ? {color: '#FF9985'} : null} className="far fa-heart"></i>
                </motion.button>
                <motion.div variants={btnsCntVariant} initial="hidden" className="arrival-btns-cnt">
                <button onClick={() => {
                        if (id==="trending-4") {
                            addToCart(id)
                        }
                        else {
                            setIsSize(true)
                        }
                    }} className="arrival-btn" disabled={inCart ? true : false}>{inCart ? "in cart" : "add to cart"}</button>
                <Link to={`/details/${correctedName}`}>
                    <button onClick={() => handleDetails(id)} className="arrival-btn">Details</button>
                </Link>     
                </motion.div>
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
