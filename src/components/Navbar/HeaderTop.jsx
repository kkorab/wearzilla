import React, {useContext} from 'react'
import IconsBox from './IconsBox'
import LogoBox from './LogoBox'
import SearchBox from './SearchBox'
import {GlobalContext} from '../../GlobalState';

export default function HeaderTop() {
    const [isLogged, setIsLogged]= useContext(GlobalContext);
    return (
        <header className="header-top">
            <div className="container flex-header">
                <SearchBox/>
                <LogoBox/>
                <IconsBox/>
            </div>
        </header>
    )
}
