import React from 'react'
import { Link } from 'react-router-dom'

export default function LogoBox() {
    return (
        <div className="logo-box">
            <Link to="/">
                <h1>WearZilla</h1>
            </Link>
        </div>
    )
}
