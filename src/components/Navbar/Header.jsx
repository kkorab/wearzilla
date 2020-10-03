import React, { useState, useEffect } from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'

export default function Header(props) {
    const [fixedHeader, setFixedHeader] = useState();
    
    useEffect(() => {
        if (props.location.pathname === '/cart' || props.location.pathname === '/wishlist' || props.location.pathname === '/details') {
            setFixedHeader(true);
        }
        else {
            setFixedHeader(false);
            window.addEventListener('scroll', handleScroll)
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[props.location]);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setFixedHeader(true)
        }
        else {
            setFixedHeader(false)
        }
    }

    return (
        <header 
        className={fixedHeader ? 'header fixed-header' : 'header'}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    )
}
