import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../GlobalState';

export default function LogoBox() {
    const {location} = useContext(GlobalContext);
    return (
        <div className="logo-box">
            <Link onClick={location.pathname === "/" ? (e) => e.preventDefault() : null}  to="/">
                <h1>WearZilla</h1>
            </Link>
        </div>
    )
}
