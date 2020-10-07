import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalState';

export default function SearchItem(props) {
    const [, setSearchActive] = props.search;
    const {functionsContext, } = useContext(GlobalContext);
    const [, handleDetails] = functionsContext;
    let {id, url, name, price} = props.data;
    let detailsName = props.data.name;
    let correctedName = detailsName.replace(/\s/g, "-").toLowerCase();
    return (
        <div className="item">
            <img src={url} alt=""/>
            <h2>{name}</h2>
            <h5>${price}</h5>
            <Link to={`/details/${correctedName}`}>
                <button className="details-btn-search" onClick={() => {
                    handleDetails(id)
                    setSearchActive(false)
                }}>Details</button>
            </Link>
        </div>
    )
}
