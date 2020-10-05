import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../GlobalState';
import Product from '../Product';
import CatalogCategories from './CatalogCategories';

export default function CatalogProducts() {
    const {productsContext} = useContext(GlobalContext);
    const [products, setProducts] = productsContext;
    const [phrase, setPhrase] = useState("");
    const [filtered, setFiltered] = useState(products)
    const prices = products.map(product => product.price);
    const maxPrice = Math.max(...prices);

    function filterItems(text) {
        const correctedText = text.toLowerCase();
        const newFiltered = products.filter(product => product.name.includes(correctedText))
        if (newFiltered.length === 0) {
            return [];
        }
        else {
            return newFiltered
        }
    }

    useEffect(() => {
        setFiltered(filterItems(phrase))
    }, [phrase])

    return (
        <section className="catalog-products">
            <div className="container cnt-catalog">
                <h2 className="section-title">Products</h2>
                <div className="catalog-cnt">
                    <div className="catalog-filters">
                        <div className="filters">
                            <input
                            onInput={(e) => {
                            setPhrase(e.target.value)}}
                             className="filters__search-input" type="text" placeholder="Search..."/>
                            <form className="categories-filters">
                                <CatalogCategories />
                            </form>
                            <div className="range-cnt">
                                <span>0</span>
                                <input type="range" name="price-filter" min="0" max={maxPrice} className="price-filter"/>
                                <span>{Math.ceil(maxPrice)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-items">
                        {filtered.length ? filtered.map(product => {
                           return <Product key={product.id} data={product} />
                        }) : <h1 className="no-matches">No matches - type other phrase</h1>}
                    </div>
                </div>
            </div>
        </section>
    )
}
