import React, { useState, useEffect} from 'react'
import IconsBox from './IconsBox'
import LogoBox from './LogoBox'
import SearchBox from './SearchBox'

export default function HeaderTop() { 
    const [isMobile, setIsMobile] = useState(false);

    const handleSize = () => {
        if(window.innerWidth < 800) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }
    } 
    
    useEffect(() => {
        handleSize();
        window.addEventListener('resize', handleSize)
    }, [isMobile]);

    return (
        <header className="header-top">
            <div className="container flex-header">
                {isMobile ? null : <SearchBox/>}
                <LogoBox/>
                <IconsBox/>
            </div>
        </header>
    )
}
