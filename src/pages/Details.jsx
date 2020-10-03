import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalState'
import imageDetail from '../images/clothes/arrival/arrival-1.jpg'


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
    const {detailsContext, productsContext} = useContext(GlobalContext);
    const [products, setProducts] = productsContext;
    const [detailsProduct, setDetailsProduct] = detailsContext;
    const {id, url, name, info, price} = (detailsProduct || products[0])
    ;
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
                                <select defaultValue="choose size" className="select-size">
                                    <option value="choose size" disabled  hidden>Choose size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                        </div>
                        <div className="details-qty">
                            <button className="qty-btn">-</button>
                            <span className="qty-span">1</span>
                            <button className="qty-btn">+</button>
                        </div>
                    </div>
                    <div className="details-add-cart">
                        <button className="details-btn"> <i class="fas fa-cart-plus"></i>
                        <span className="to-hide">Add to Cart</span></button>
                        <button className="details-btn"><i className="far fa-heart"></i>
                        <span className="to-hide">Add to Wishlist</span></button>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}
