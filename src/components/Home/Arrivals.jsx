import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalState';
import Product from '../Product';

export default function Arrivals() {
    const {productsContext} = useContext(GlobalContext);
    const [products, setProducts] = productsContext;
    const dataArrivals = products.filter(product => product.arrival === true);
    return (
        <div className="arrivals">
            <div className="container">
                <h2 className="section-title">Recent arrivals</h2>
                <div className="arrivals-cnt">
                    {dataArrivals.map(item => {
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
