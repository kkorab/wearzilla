import { motion } from 'framer-motion'
import React from 'react'
import MainHero from '../components/MainHero';
import SaleItems from '../components/Sale/SaleItems';

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

export default function Sale() {
    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" 
        className="sale">
            <MainHero cName="sale-hero" prefix="sale-headline" headline="#sale" subHeadline=""/>
            <SaleItems/>
        </motion.div>
    )
}
