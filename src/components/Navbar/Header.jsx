import React, { useState, useEffect } from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'

export default function Header() {
    const [fixedHeader, setFixedHeader] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setFixedHeader(true)
        }
        else {
            setFixedHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [fixedHeader])

    return (
        <header className={fixedHeader ? 'header fixed-header' : 'header'}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    )
}
