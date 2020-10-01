import { motion } from 'framer-motion'
import React from 'react'
import WishlistHeader from '../components/Wishlist/WishlistHeader'
import WishlistProducts from '../components/Wishlist/WishlistProduct'

const containerVariants = {
    hidden: {
        opacity: 0, 
    },
    visible: {
        opacity: 1,
        transition: { duration: .5, ease: 'easeInOut'}
    },
    exit: {
        opacity: 0,
        transition: {duration: .5, ease: 'easeInOut'}
    }
}

const wishlistVariants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 1
        }
    },
    exit: {
        opacity: 0,
        y: -50
    }
}

export default function Wishlist() {
    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"  
        className="wishlist-section">
            <div className="wishlist-space cart-space"></div>
            <div className="container wishlist-flex">
                <div className="cart-banner">
                    <h1 className="cart-headline">Your wishlist</h1>
                </div>
                <motion.div 
                variants={wishlistVariants}
                className="wishlist-content">
                    <WishlistHeader/>
                    <WishlistProducts/>
                </motion.div> 
            </div>

        </motion.section>
    )
}
