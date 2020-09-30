import React, { useState } from 'react'
import { motion } from 'framer-motion'

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

const trendingVariant = {
    hover: {
        opacity: 1,
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

export default function Trending() {
    const [color, setColor] = useState(false);

    return (
        <section className="trending">
            <div className="container">
                <h2 className="section-title">Trending</h2>
                <div className="row flex-row">
                    <div className="col-cnt">
                        <motion.div variants={trendingVariant} whileHover="hover" initial="hidden" className="trending-l">
                            <div className="tredning-info" >
                                <h1 className="trending-title">Oversized hoodie</h1>
                                <h4 className="trending-price">$19.99</h4>
                                <motion.button variants={btnVariant} onClick={() => setColor(!color)}className="trending-wishlist-btn">
                                    <i style={{color: `${color ? "#FFC2CE" : "white" }`}} className="far fa-heart "></i>
                                </motion.button>
                                <motion.div variants={cntVariant} className="trending-btns-cnt">
                                    <button className="trending-btn">Add to cart</button>
                                    <button className="trending-btn">Details</button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-cnt">
                        <motion.div variants={trendingVariant} whileHover="hover" initial="hidden" className="trending-m">
                            <div className="tredning-info" >
                                <h1 className="trending-title">Beige shirt</h1>
                                <h4 className="trending-price">$24.99</h4>
                                <motion.button  variants={btnVariant} className="trending-wishlist-btn">
                                    <i className="far fa-heart "></i>
                                </motion.button>
                                <motion.div variants={cntVariant} className="trending-btns-cnt">
                                    <button className="trending-btn">Add to cart</button>
                                    <button className="trending-btn">Details</button>
                                </motion.div>
                            </div>
                        </motion.div>
                        <div className="sm-cnt">
                            <motion.div variants={trendingVariant} whileHover="hover" initial="hidden" className="trending-sm banner-3">
                            <div className="tredning-info" >
                                <h1 className="trending-title">Flowers Coat</h1>
                                <h4 className="trending-price">$35.99</h4>
                                <motion.button  variants={btnVariant} className="trending-wishlist-btn">
                                    <i className="far fa-heart "></i>
                                </motion.button>
                                <motion.div variants={cntVariant} className="trending-btns-cnt">
                                    <button className="trending-btn">Add to cart</button>
                                    <button className="trending-btn">Details</button>
                                </motion.div>
                            </div>
                            </motion.div>
                            <motion.div variants={trendingVariant} whileHover="hover" initial="hidden" className="trending-sm banner-4">
                                <div className="tredning-info" >
                                    <h1 className="trending-title">Leather bag</h1>
                                    <h4 className="trending-price">$19.99</h4>
                                    <motion.button  variants={btnVariant} className="trending-wishlist-btn">
                                    <i className="far fa-heart "></i>
                                    </motion.button>
                                    <motion.div variants={cntVariant} className="trending-btns-cnt">
                                        <button className="trending-btn">Add to cart</button>
                                        <button className="trending-btn">Details</button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
