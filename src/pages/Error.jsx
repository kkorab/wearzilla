import React from 'react'
import { motion } from 'framer-motion'

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

export default function Error() {
    return (
        <motion.div 
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit="exit"
        className="error">
            <h1>ERROR</h1>
            <h1>404</h1>
            <h1>PAGE NOT FOUND</h1>
        </motion.div>
    )
}
