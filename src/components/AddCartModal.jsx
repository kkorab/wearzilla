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

export default function AddCartModal() {
    const {showAddedItemModal} = useContext(GlobalContext);
    const [showAddModal] = showAddedItemModal;
    return (
        <AnimatePresence>
                {showAddModal &&
                    <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="add-cart-modal">
                        <h2>Item has been added to cart</h2>
                    </motion.div>
                }
        </AnimatePresence>
    )
}
