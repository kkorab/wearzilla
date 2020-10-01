import { motion } from 'framer-motion'
import React from 'react';

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



export default function MainHero(props) {
    return (
        <div className={props.cName}>
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
                    variants={subVariant}>
                    {props.subHeadline}</motion.h5>
                    <motion.h1
                    variants={opacityVariant}
                    className={`intro-headline ${props.prefix}`}>{props.headline}</motion.h1>
                    <h3 className="outro-text">clothes store</h3>
                </motion.div>
            </div>
        </div>
    )
}

