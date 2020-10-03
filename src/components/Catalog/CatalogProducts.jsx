import React, {useContext} from 'react';
import {GlobalContext} from '../../GlobalState';
import Product from '../Product';
import CatalogCategories from './CatalogCategories';

export default function CatalogProducts() {
    const {productsContext} = useContext(GlobalContext);
    const [products, setProducts] = productsContext;
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
                                <CatalogCategories/>
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
                           return <Product key={product.id} data={product}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
