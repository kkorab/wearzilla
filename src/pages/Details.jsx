import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../GlobalState'


const containerVariants = {
    hidden: {
        opacity: 0,
        
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .5,
            ease: 'easeInOut'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .5,
            ease: 'easeInOut'
        }
    }
}

export default function Details() {
    const {detailsContext, productsContext, functionsContext, cartContext, sizeContext} = useContext(GlobalContext);
    const [cart, setCart] = cartContext;
    const [products, setProducts] = productsContext;
    const [detailsProduct] = detailsContext;
    const {id, name, info, price, url, inWishlist, inCart} = (detailsProduct || products[0]);
    const [getItem, , , , , , , addToWishlist, removeFromWishlist] = functionsContext;

    const [whatSize, setWhatSize] = sizeContext;
    // details 
    const [quant, setQuant] = useState(1);


    function getSize(e) {
        setWhatSize(e.target.value)
    }

    function addToCartDetailsItem() {
        let tempProducts = [...products];
        const index = products.indexOf(getItem(id))
        const item = tempProducts[index];
        item.inCart = true;
        item.quantity = quant;
        const price = item.price;
        item.total = quant * price;
        item.size = whatSize;

        setCart([...cart, item]);
        setProducts(tempProducts);
    }

    function decrementDetails() {
        if (quant < 2) {
            return
        }
        else {
            setQuant(quant -1);
        }
    }

    function incrementDetails() {
        setQuant(quant+1)
    }

    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" 
        className="details">
            <div className="wishlist-space cart-space"></div>
            <div className="container details-flex">
                <div className="details-photo">
                    <img className="details-img" src={url} alt="detail img"/>
                </div>
                <div className="details-content">
                    <div className="details-top">
                    <h1 className="details-title">{name}</h1>
                        <div className="stars-reviews">
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="reviews">
                                <span>(2 reviews)</span>
                            </div>
                        </div>
                        <h4 className="details-price">
                            ${price}
                        </h4>
                    </div>
                    <p className="details-product-desc">{info}</p>
                    <div className="details-options-cnt">
                        <div className="details-size">
                                <select defaultValue="choose size"
                                onChange={(e) => getSize(e) } 
                                className="select-size">
                                    <option value="choose size" disabled  hidden>Choose size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                        </div>
                        <div className="details-qty">
                            <button onClick={() => decrementDetails()} className="qty-btn">-</button>
                            <span className="qty-span">{quant}</span>
                            <button onClick={() => incrementDetails()} className="qty-btn">+</button>
                        </div>
                    </div>
                    <div className="details-add-cart">
                        <button
                        onClick={inCart ? null : (id) => addToCartDetailsItem(id)} 
                        className="details-btn">
                            {inCart ? null : <i className="fas fa-cart-plus"></i>}
                            <span className="to-hide">{inCart ? "In cart" : "Add to cart"}</span>
                        </button>
                        <button className="details-btn"
                        onClick={inWishlist ? () => removeFromWishlist(id) : 
                        () =>  addToWishlist(id)}
                        >
                        {inWishlist ? null : <i className="far fa-heart"></i>}
                        <span className="to-hide">{inWishlist ? "In Wishlist" : "Add to Wishlist"}</span></button>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}
