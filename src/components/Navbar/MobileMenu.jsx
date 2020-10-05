import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../GlobalState'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const {location, mobileContext} = useContext(GlobalContext);
    const [isMobileSize] = mobileContext;

    const hamburger = (
        <div onClick={() => setIsOpen(!isOpen)} className="hamburger-menu">
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
    )

    const backdropVariants = {
        hidden: {
            opacity: 0,
            x: "100%"
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
            }
        },
        exit: {
            x: "100%",
            transition: {
                duration: 0.6
            }
        }
    }

    const menuVariants = {
        hidden: {
            x: "-100%"
        },
        show: {
            x: 0,
            transition: {
                duration:  0.7,
                delay: 0.3
            }
        },
        exit: {
            x:  "-100%",
            transition: {
                duration: 0.6
            }
        }
    }

    return (
        <>
        {isMobileSize &&
            hamburger
        }
        <AnimatePresence>
        {isOpen && 
            <>  
                <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="show"
                exit='exit' 
                className="backdrop"></motion.div>
                <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="show"
                exit='exit' 
                className="mobile-menu-cnt">
                    <ul className="mobile-menu">
                        <li className="mobile-menu-item">
                            <Link to='/' onClick={(e) => {
                                if (location.pathname === "/") 
                                {
                                    e.preventDefault()
                                } 
                                else {
                                    setIsOpen(false);
                                    return;
                                }
                            }} className="mobile-menu-link">Home</Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link onClick={(e) => {
                                if (location.pathname === "/catalog") 
                                {
                                    e.preventDefault()
                                } 
                                else {
                                    setIsOpen(false);
                                    return;
                                }
                            }} to="/catalog" className="mobile-menu-link">Catalog</Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link onClick={(e) => {
                                if (location.pathname === "/sale") 
                                {
                                    e.preventDefault()
                                } 
                                else {
                                    setIsOpen(false);
                                    return;
                                }
                            }} to="/sale" className="mobile-menu-link">Sale</Link>
                        </li>
                    </ul>
                </motion.div>
            </>
        }
        </AnimatePresence>
        </>
    )
}
