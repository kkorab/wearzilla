import { motion } from 'framer-motion'
import React from 'react'
import CartHeader from '../components/Cart/CartHeader'
import CartProduct from '../components/Cart/CartProduct'
import CartTotal from '../components/Cart/CartTotal'


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

const cartVariants = {
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

export default function Cart() {
    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"  
        className="cart-section">
            <div className="cart-space"></div>
            <div className="container cart-flex">
                <div className="cart-banner">
                    <h1 className="cart-headline">shopping cart</h1>
                </div>
                <motion.div
                variants={cartVariants}
                className="shopping-cart">
                    <div className="shopping-cart-content">
                        <CartHeader/>
                        <CartProduct/>
                    </div>
                    <CartTotal/>
                </motion.div>
            </div>

        </motion.section>
    )
}
