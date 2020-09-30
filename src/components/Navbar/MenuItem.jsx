import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem(props) {
    return (
        <li className="menu-item"><Link className="menu-link" to={props.data.url}>{props.data.page}</Link></li>
    )
}
