import React from 'react'
import MenuItem from './MenuItem'

const menuData = [
    {
        id: "menu-item-1",
        page: 'home',
        url: "/"
    },
    {
        id: "menu-item-2",
        page: 'catalog',
        url: "/catalog"
    },
    {
        id: "menu-item-3",
        page: 'sale',
        url: "/sale"
    },
]

export default function Menu() {
    return (
        <ul className="menu">
            {menuData.map(menuItem => {
                return <MenuItem key={menuItem.id} data={menuItem} />
            })}
        </ul>
    )
}
