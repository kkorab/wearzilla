import React, {useContext} from 'react';
import ArrivalItem from './ArrivalItem';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalState';

export default function Arrivals() {
    const [isMobileSize, setIsMobileSize, products, setProducts] = useContext(GlobalContext);
    const dataArrivals = products.filter(product => product.arrival === true);
    return (
        <div className="arrivals">
            <div className="container">
                <h2 className="section-title">Recent arrivals</h2>
                <div className="arrivals-cnt">
                    {dataArrivals.map(item => {
                        return <ArrivalItem key={item.id} data={item}/>
                    })}
                </div>
                <h2 className="section-title">
                    <Link to="/catalog">Go to catalog <i className="fas fa-angle-right"></i></Link>
                </h2>
            </div>
        </div>
    )
}
