import React, {useContext} from 'react';
import {GlobalContext} from '../../GlobalState';
import CatalogProduct from './CatalogProduct';

export default function CatalogProducts() {
    const [isMobileSize, setIsMobileSize, products, setProducts] = useContext(GlobalContext);
    const prices = products.map(product => product.price);
    const maxPrice = Math.max(...prices);

    return (
        <section className="catalog-products">
            <div className="container">
                <h2 className="section-title">Products</h2>
                <div className="catalog-cnt">
                    <div className="catalog-filters">
                        <div className="filters">
                            <input className="filters__search-input" type="text" placeholder="Search..."/>
                            <form className="categories-filters">
                                <label htmlFor="dresses">
                                    <input name="dresses" type="checkbox"/>Dresses
                                </label>
                                <label htmlFor="jackets">
                                    <input  name="jackets" type="checkbox"/>Jackets/Coats
                                </label>
                                <label htmlFor="jeans">
                                    <input name="jeans" type="checkbox"/>Jeans
                                </label>
                                <label htmlFor="jumpsuits">
                                    <input name="jumpsuits" type="checkbox"/>Jumpsuits
                                </label>
                                <label htmlFor="polo">
                                    <input name="polos"type="checkbox"/>Polo
                                </label>
                                <label htmlFor="shirts">
                                    <input name="shirts" type="checkbox"/>Shirts
                                </label>
                                <label htmlFor="sweatshirts">
                                    <input name="sweatshirts" type="checkbox"/>Sweatshirts
                                </label>
                            </form>
                            <div className="range-cnt">
                                <span>0</span>
                                <input type="range" name="price-filter" min="0" max={maxPrice} className="price-filter"/>
                                <span>{Math.ceil(maxPrice)}</span>
                            </div>
                        </div>

                    </div>
                    <div className="catalog-items">
                        {products.map(product => {
                           return <CatalogProduct key={product.id} data={product}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
