import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';



export default function HeaderBottom() {
    const [isOpen, setIsOpen] = useState(true);
    const [showHamburger, setShowHamburger] = useState(false);


    const hamburger = (
        <div onClick={() => setIsOpen(!isOpen)} className="hamburger-menu">
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
    )

    const handleMenu = () => {
        if (window.innerWidth < 800) {
            setShowHamburger(true)
        }
        else {
            setShowHamburger(false)
        }
    }

    useEffect( () => {
        window.addEventListener('resize', handleMenu)
    }, [showHamburger])

    return (
        <nav className="nav">
            <div className="container flex-nav"> 
                {showHamburger ? hamburger : <Menu/>}  
                <div className="sale">
                <Link to="/sale"><h5><span className="sale-alert"> *Sale* </span>up to <span className="sale-alert">50%</span> off</h5></Link>
                </div>
            </div>
            
        </nav>
    )
}
