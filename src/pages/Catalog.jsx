import { motion } from 'framer-motion'
import React from 'react'
import CatalogProducts from '../components/Catalog/CatalogProducts'
import MainHero from '../components/MainHero'

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


export default function Catalog() {
    return (
        <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" 
        className="catalog">
            <MainHero cName="catalog-hero" prefix="catalog-headline" headline="catalog" subHeadline="season 2020/2021" />
            <CatalogProducts/>
            
        </motion.section>
    )
}
