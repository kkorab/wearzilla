import React from 'react'

export default function SearchBox() {
    return (
        <div className="search-box">
            <form className="search-form">
                <button className="search-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
                <input  className="input-search" type="text" autoComplete="off" placeholder="Search product..."/>
            </form>
        </div>
    )
}
