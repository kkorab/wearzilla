import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import WishlistProducts from '../components/Wishlist/WishlistProducts'
import { GlobalContext } from '../GlobalState'

import list from '../images/svg/list.svg'

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
    const {wishlistContext} = useContext(GlobalContext);
    const [wishlist] = wishlistContext;
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
                {wishlist.length ? (
                    <motion.div 
                    variants={wishlistVariants}
                    className="wishlist-content">
                        <WishlistProducts/>
                    </motion.div> 
                ) : (
                    <>
                        <div className="cart-banner">
                            <h1 className="cart-headline">Your wishlist is empty</h1>
                        </div>
                        <div className="svg-flex">
                        {<img className="svg-empty" src={list} alt=""/> }
                        </div>
                    </>
                ) }
            </div>
        </motion.section>
    )
}
