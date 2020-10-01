import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../../GlobalState';
import Menu from './Menu';

export default function HeaderBottom() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobileSize] = useContext(GlobalContext);


    const hamburger = (
        <div onClick={() => setIsOpen(!isOpen)} className="hamburger-menu">
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
    )
    return (
        <nav className="nav">
            <div className="container flex-nav"> 
                {isMobileSize ? hamburger : <Menu/>}  
                <div className="sale-nav">
                <Link to="/sale"><h5><span className="sale-alert"> *Sale* </span>up to <span className="sale-alert">50%</span> off</h5></Link>
                </div>
            </div>
            
        </nav>
    )
}
