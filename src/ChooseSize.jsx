import React from 'react'

export default function ChooseSize() {
    return (
        <div className="choose-size">
            <select defaultValue="choose size"
            className="select-size-product">
                <option value="choose size" disabled hidden>Choose size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
        </div>
    )
}
