import React from 'react'
import { motion } from 'framer-motion'

const opacityVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1,
        }
    }
}

const subVariant = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 1.5
        }
    }
}

const cntVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5,
        }
    }
}

const btnVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2.5
        }
    }
}

export default function Hero() {
    return (
        <div className="hero">
            <div className="container intro-flex">
                <motion.div
                variants={cntVariant}
                initial='hidden'
                animate="visible"
                className="intro-cnt">
                    <h3 
                    className="intro-text">WearZilla</h3>
                    <motion.h5
                    className="intro-subheadline"
                    variants={subVariant}
                    > You're looking good</motion.h5>
                    <motion.h1
                    variants={opacityVariant}
                    className="intro-headline">new lookbook</motion.h1>
                    <motion.button
                    variants={btnVariant} 
                    className="intro-btn">Discover more</motion.button>
                    <h3 className="outro-text">clothes store</h3>
                </motion.div>
            </div>
        </div>
    )
}
