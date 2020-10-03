import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import CartProducts from '../components/Cart/CartProducts'
import CartTotal from '../components/Cart/CartTotal'
import { GlobalContext } from '../GlobalState'


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
            delay: 1,
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        y: -50
    }
}

export default function Cart() {
    const {cartContext} = useContext(GlobalContext);
    const [cart] = cartContext;

    return (
        <>
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
                    {cart.length ? (<motion.div
                    variants={cartVariants}
                    className="shopping-cart">
                        <motion.div variants={cartVariants} className="shopping-cart-content">
                            <CartProducts/>
                        </motion.div>
                    </motion.div>) : (
                        <div className="cart-banner">
                            <h1 className="cart-headline">Your cart is empty</h1>
                        </div>
                    ) }
                </div>
            </motion.section>
            <CartTotal/>
        </>
    )
}
