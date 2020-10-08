import React, { useState, useEffect } from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import shoesImg from '../images/shoes.jpg';

const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    },
    exit: {
        
    }
}

const modal = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    }
}


export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    function modalFunction() {
        setTimeout(() => {
            setShowModal(true);
            document.body.style.overflow = "hidden";
        }, 8000)
    }

   useEffect(() => {
        modalFunction();
   }, [])

    return (
        <AnimatePresence>
        {showModal && (
            <motion.div 
            className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        >
            <motion.div 
            className="modal"
            variants={modal}
            >
                <div className="modal__content">
                    <h4>WearZilla</h4>
                    <h2>GET <span className="modal-alert">20% </span>OFF</h2>
                    <p>
                        Subscribe to the WearZilla newsletter to receive timely updates from your favorite products.
                    </p>
                    <form className="modal-form">
                        <input className="modal-input" type="email" placeholder="Your email"/>
                        <button className="modal-btn" type="submit">GO</button>
                    </form>
                </div>
                <div className="modal__picture">
                    <button className="modal-close-btn" onClick={() => {
                        document.body.style.overflow = "unset";
                        setShowModal(false)}}>
                        <i className="fas fa-times"></i>
                    </button>
                    <img src={shoesImg} alt="shoes modal" className="modal-img"/>
                </div>
            </motion.div>

        </motion.div>
        )}
        </AnimatePresence>
    )
        }