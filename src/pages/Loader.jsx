import { motion } from 'framer-motion'
import React from 'react'

const loadingCntVariants = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    },
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const dotVariants = {
    start: {
        y: "0%"
    },
    end: {
        y: '100%',
        transition: {
            duration: 0.4,
            yoyo: Infinity,
            ease: "easeInOut",
        }
    }
}

export default function Loader() {
    return (
        <div className="loader">
            <motion.div className="loader-dots" variants={loadingCntVariants}
            initial="start"
            animate="end"
            >
                <motion.span className="dot" variants={dotVariants} initial></motion.span>
                <motion.span className="dot" variants={dotVariants}></motion.span>
                <motion.span className="dot" variants={dotVariants}></motion.span>
            </motion.div>
        </div>
    )
}
