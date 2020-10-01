import React, {useState, createContext, useEffect} from 'react';
import {items} from './Data';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
    const [isLogged, setLogged] = useState(true);
    const [products, setProducts] = useState(items)
    const [isMobileSize, setIsMobileSize] = useState(false);

    useEffect(() => {
        const handleWindowSize = () => {
            if (window.innerWidth < 800) {
                setIsMobileSize(true);
            }
            else {
                setIsMobileSize(false);
            }
        }
        window.addEventListener('resize', handleWindowSize);
        handleWindowSize();
        return () => window.removeEventListener('resize', handleWindowSize);
    }, [isMobileSize])

    return (
        <GlobalContext.Provider value={[isMobileSize, setIsMobileSize, products, setProducts]}>
            {props.children}    
        </GlobalContext.Provider>
    )
}
