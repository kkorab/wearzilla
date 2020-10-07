import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../../GlobalState';
import Product from '../Product';
import CatalogCategories from './CatalogCategories';

export default function CatalogProducts() {
    const {productsContext} = useContext(GlobalContext);
    const [products] = productsContext;
    const [phrase, setPhrase] = useState("");
    const [filtered, setFiltered] = useState(products)
    const prices = products.map(product => product.price);
    const maxPrice = Math.max(...prices);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(maxPrice);

    // filter by search

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
        return setFiltered(filterItems(phrase))
    }, [phrase])

    // filter by checkboxes

    const categories = Array.from(new Set(products.map(item => item.category)));
    const objCategories = categories.map(item => {
        return {
            category: item,
            checked: false
        }
    })
    const arrCopy = [...objCategories];
    const [arr, setArr] = useState(arrCopy);

    const handleChange = (index) => {
        let tempArr = [...arr];
        tempArr[index].checked = !tempArr[index].checked;
        setArr(tempArr);
    }

    function filterCheckbox(array) {
        let filteredArray = array.filter(item => item.checked === true);
        return filteredArray;
    }
    
    let filteredItems = filterCheckbox(arr);
    let filteredCategories = filteredItems.map(item => item.category);

    let tab = [];
    filtered.forEach(product => {
        filteredCategories.forEach(item => {
            if(product.category === item) {
                tab.push(product)
            };
        })
    })

    // filtered by price 
    function filterByPrice(min, max) {
        const tempArr = [...products];
        const tempArrFiltered = tempArr.filter(item => {
          return item.price <= max && item.price>=min
        })
        setFiltered(tempArrFiltered);
    }

    useEffect(() => {
        filterByPrice(minValue,maxValue);
        return filterByPrice(minValue,maxValue);
    }, [minValue, maxValue]);

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
                                <CatalogCategories arr={arr} handleChange={handleChange}/>
                            </form>
                            <div className="filter-price-cnt">
                                <label className="filter-label" htmlFor="">Filter by price:</label>
                                <form className='form-price' action="">
                                    <label htmlFor=""> Min:
                                        <input 
                                        type="text" 
                                        placeholder={minValue} 
                                        className="price-input"
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            const newVal= parseFloat(val);
                                            if (val==="") {
                                                console.log('works');
                                                setMinValue(0)
                                            }
                                            else if (!isNaN(newVal)) {
                                                setMinValue(newVal)
                                            }
                                            else {
                                                return;
                                            }
                                        }}
                                        />
                                    </label>
                                    <label htmlFor=""> Max
                                        <input 
                                        type="text" 
                                        placeholder={Math.ceil(maxPrice)}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            const newVal= parseFloat(val);
                                            if (val==="") {
                                                console.log('works');
                                                setMaxValue(maxPrice)
                                            }
                                            else if (!isNaN(newVal)) {
                                                setMaxValue(newVal)
                                            }
                                            else {
                                                return;
                                            }
                                        }} 
                                        className="price-input"/>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="catalog-items">
                        {tab.length ? (tab.length ? tab.map(product => {
                            return <Product key={product.id} data={product} /> 
                        }) : null) : (filtered.length ? filtered.map(product => {
                           return <Product key={product.id} data={product} />
                        }) : <h1 className="no-matches">No matches - type other phrase</h1>) }
                    </div>
                </div>
            </div>
        </section>
    )
}


