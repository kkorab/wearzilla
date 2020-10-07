import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {GlobalContext} from '../../GlobalState';
import Product from '../Product';

export default function SaleItems() {
    const {productsContext} = useContext(GlobalContext);
    const [products] = productsContext;
    const dataSale = products.filter(product => product.sale === true);
    return (
        <div className="arrivals sales">
            <div className="container">
                <h2 className="section-title">Sales</h2>
                <div className="arrivals-cnt sales-cnt">
                    {dataSale.map(item => {
                        return <Product key={item.id} data={item}/>
                    })}
                </div>
                <h2 className="section-title">
                    <Link to="/catalog">Go to catalog <i className="fas fa-angle-right"></i></Link>
                </h2>
            </div>
        </div>
    )
}
