import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../GlobalState';

export default function MenuItem(props) {
    const {location} = useContext(GlobalContext);
    return (
        <li className="menu-item"><Link 
        className="menu-link" onClick={props.data.url === location.pathname ?  e => e.preventDefault() : null} to={props.data.url}>{props.data.page}</Link></li>
    )
}
