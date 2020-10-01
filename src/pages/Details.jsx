import { motion } from 'framer-motion'
import React from 'react'
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
    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" 
        className="details">
            <div className="container details-flex">
                <div className="details-photo">
                    <img className="details-img" src={imageDetail} alt="detail img"/>
                </div>
                <div className="details-content">
                    <div className="details-top">
                        <h1 className="details-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
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
                            $84.90
                        </h4>
                    </div>
                    <p className="details-product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas est magni sint inventore ullam esse adipisci vel modi incidunt earum expedita ex eligendi qui aut alias numquam aliquam accusantium, sequi facilis. Labore suscipit excepturi dignissimos, odit animi debitis assumenda eius! Placeat impedit nisi voluptates officia est expedita, beatae maiores!</p>
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
                        <button className="details-btn">Add to Cart</button>
                        <button className="details-btn"><i className="far fa-heart"></i> Add to Wishlist</button>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}
