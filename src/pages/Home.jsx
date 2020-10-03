import { motion } from 'framer-motion';
import React from 'react'
import Arrivals from '../components/Home/Arrivals';
import Bar from '../components/Home/Bar/Bar';
import Hero from '../components/Home/Hero';
import Trending from '../components/Home/Trending';

const containerVariants = {
    hidden: {
        opacity:0,
        
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export default function Home() {
    return (
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="home">
            <Hero/>
            <Trending/>
            <Bar/>
            <Arrivals/>
        </motion.div>
    )
}
