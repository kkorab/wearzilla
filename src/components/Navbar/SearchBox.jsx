import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalState';
import Search from './Search'

export default function SearchBox() {
    const [searchActive, setSearchActive] = useState(false);
    const [filteredBySearch, setFilteredBySearch] = useState([]);
    const {productsContext} = useContext(GlobalContext);
    const [products] = productsContext;

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.search-cnt')) {
            return;
        }
        else {
            setSearchActive(false)
        }
    })

    function handleSearch(e) {
        if (e.target.value === "") {
            setFilteredBySearch([]);
        } 
        else {
            const value = e.target.value;
            setFilteredBySearch(products.filter(product => {
                return product.name.includes(value);
            }))
        }
    }

    return (
        <>
            <div className="search-box">
                <form className="search-form">
                    <button className="search-btn" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                    <input  
                    className="input-search"
                    onChange={(e) => handleSearch(e)} 
                    type="text" 
                    onClick={() => {
                        setSearchActive(true);}} 
                    autoComplete="off" 
                    placeholder="Search product..."/>
                </form>
            </div>
            <Search value={[searchActive, setSearchActive]} filtered={[filteredBySearch, setFilteredBySearch]}/>
        </>
    )
}
