import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import SaleItem from './SaleItem';
import {GlobalContext} from '../../GlobalState';

export default function SaleItems() {
    const [isMobileSize, setIsMobileSize, products, setProducts] = useContext(GlobalContext);
    const dataSale = products.filter(product => product.sale === true);
    return (
        <div className="arrivals sales">
            <div className="container">
                <h2 className="section-title">Sales</h2>
                <div className="arrivals-cnt sales-cnt">
                    {dataSale.map(item => {
                        return <SaleItem key={item.id} data={item}/>
                    })}
                </div>
                <h2 className="section-title">
                    <Link to="/catalog">Go to catalog <i className="fas fa-angle-right"></i></Link>
                </h2>
            </div>
        </div>
    )
}
