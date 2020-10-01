import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {GlobalContext} from '../../GlobalState'; 
import SearchBox from './SearchBox';

export default function IconsBox() {
    const [isLogged, setIsLogged] = useContext(GlobalContext);
    const [isMobileSize] = useContext(GlobalContext);


    return (
        <div className="icons-box">
            <Link to="/wishlist">
                <div className="wishlist">
                    <i className="far fa-heart"></i>
                    <h6>My Wishlist</h6>
                </div>
            </Link>
            <Link to="/cart">
                <div className="cart">
                    <i className="fas fa-shopping-cart"></i>
                    <h6>$0,00</h6>
                </div>
            </Link>
            <div className="sign-in">
                <i className="far fa-user"></i>
                <h6>{isLogged ? "Log Out" : "Log In"}</h6>
            </div>
            {isMobileSize ? <SearchBox/> : null}
        </div>
    )
}
