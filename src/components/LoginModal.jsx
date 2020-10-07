import React, { useContext} from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import { GlobalContext } from '../GlobalState';


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


export default function LoginModal() {
        const {modalContext} = useContext(GlobalContext);
        const [showLoginModal, setShowLoginModal] = modalContext;

    return (
        <AnimatePresence>
        {showLoginModal && 
        (
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
                        <div className="choose-option">
                            <button className="option-button active-button">Sign In</button>
                            <button className="option-button">Register</button>
                        </div>
                        <div className="modal__signin">
                            <form className="modal__signin-form">
                                <label htmlFor="username">Username or email address*</label>
                                <input className="modal-input signin-input" name="username" type="text"/>
                                <label htmlFor="password">Password*</label>
                                <input className="modal-input signin-input" name="password" type="password"/>
                                <div className="modal__signin-inputs">
                                    <button className="btn-login" type="submit">Log in</button>
                                    <label htmlFor="remember"> 
                                        <input name="remember" type="checkbox"/>
                                        Remember me?
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="modal__register">

                        </div>
                    </div>
                        <button className="modal-close-btn" onClick={() => setShowLoginModal(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    )
        }