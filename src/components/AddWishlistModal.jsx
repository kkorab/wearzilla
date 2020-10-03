import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../GlobalState'

const variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

export default function AddWishlistModal() {
    const {showAddedItemModalWishlist} = useContext(GlobalContext);
    const [showAddModalWishlist] = showAddedItemModalWishlist;
    return (
        <AnimatePresence>
                {showAddModalWishlist &&
                    <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="add-cart-modal">
                        <h2>Item has been added to wishlist</h2>
                    </motion.div>
                }
        </AnimatePresence>
    )
}
