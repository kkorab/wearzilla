import React from 'react'
import Category from './Category';

export default function CatalogCategories(props) {
    const arr = props.arr;

    return (
        arr.map((category, index) => {
            return <Category key={index} id={index} name={category} arr={props.arr} handleChange={props.handleChange}/>
        })
    )
}

