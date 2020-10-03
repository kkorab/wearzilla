import React from 'react'

export default function Category(props) {
    const category = props.data;
    const index = props.id;
    return (
        <label htmlFor={category}>
            <input name={category} type="checkbox"/>{category}
        </label>
    )
}
