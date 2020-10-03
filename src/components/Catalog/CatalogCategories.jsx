import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalState'
import Category from './Category';

export default function CatalogCategories() {
    const {productsContext} = useContext(GlobalContext);
    const [products] = productsContext;
    const data = products.map(product => product.category)
    const set = new Set(data);
    const categories = Array.from(set);

    return (
        categories.map((category, index) => {
            return <Category key={`category-${index}`} data={category}/>
        })
    )
}
