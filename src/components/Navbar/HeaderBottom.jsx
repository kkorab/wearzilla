import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../../GlobalState';
import Menu from './Menu';

export default function HeaderBottom() {
    const {mobileContext} = useContext(GlobalContext);
    const [isMobileSize] = mobileContext;

    return (
        <nav className="nav">
            <div className="container flex-nav"> 
                {isMobileSize ? null : <Menu/>}  
                <div className="sale-nav">
                <Link to="/sale"><h5><span className="sale-alert"> *Sale* </span>up to <span className="sale-alert">50%</span> off</h5></Link>
                </div>
            </div>
        </nav>
    )
}
