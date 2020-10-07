import React from 'react'

export default function Category(props) {
    const id = props.id;
    return (
        <label htmlFor="">
            <input 
            type="checkbox"
            onChange={() => props.handleChange(id)}
            checked={props.name.checked ? true : false}
            />
            {props.name.category}
        </label>
    )
}
