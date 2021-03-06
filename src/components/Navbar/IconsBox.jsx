import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {GlobalContext} from '../../GlobalState'; 
import SearchBox from './SearchBox';
import cartSvg from '../../images/svg/bag.svg'
import heartSvg from '../../images/svg/heart.svg'
import userSvg from '../../images/svg/user.svg'


export default function IconsBox() {
    const isLogged = false;
    const {functionsContext,cartContext, wishlistContext, location, modalContext} = useContext(GlobalContext);
    const [cart] = cartContext;
    const [wishlist] = wishlistContext;
    const [, , , , , , addTotals, ,] = functionsContext;
    const [, setShowLoginModal] = modalContext;

    const [isMobileSize, setIsMobileSize] = useState(false)

    function checkSize() {
        if (window.innerWidth < 800) {
            setIsMobileSize(true);
        }
        else {
            setIsMobileSize(false)
        }
    }

    useEffect(() => {
        checkSize()
    },[])

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [isMobileSize])
    

    

    return (
        <div className="icons-box">
            <Link className={wishlist.length ? "show-counter" : null} onClick={location.pathname === "/wishlist" ? (e) => e.preventDefault() : null} to="/wishlist">
                <div className="wishlist">
                    <img className="svg-icon svg-heart" src={heartSvg} alt="svg icon"/>
                    <h6>My Wishlist</h6>
                    {wishlist.length ? 
                    <div className="counter">{wishlist.length}</div> : null
                    }
                </div>
            </Link>
            <Link onClick={location.pathname === "/cart" ? (e) => e.preventDefault() : null} to="/cart">
                <div className="cart">
                    <img className="svg-icon" src={cartSvg} alt="svg icon"/>
                    <h6>${addTotals()}</h6>
                    {cart.length ? 
                    <div className="counter">{cart.length}</div> : null
                    }
                </div>
            </Link>
            <div className="sign-in" onClick={() => {setShowLoginModal(true)}}>
                <img className="svg-icon" src={userSvg} alt="svg icon"/>
                <h6>{isLogged ? "Log Out" : "Log In"}</h6>
            </div>
            {isMobileSize ? <SearchBox/> : null}
        </div>
    )
}
