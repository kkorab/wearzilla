import React from 'react';
import ArrivalItem from './ArrivalItem';

import arrival1 from '../../images/clothes/arrival/arrival-1.jpg';
import arrival2 from '../../images/clothes/arrival/arrival-2.jpg';
import arrival3 from '../../images/clothes/arrival/arrival-3.jpg';
import arrival4 from '../../images/clothes/arrival/arrival-4.jpg';
import arrival5 from '../../images/clothes/arrival/arrival-1-w.jpg';
import arrival6 from '../../images/clothes/arrival/arrival-2-w.jpg';
import arrival7 from '../../images/clothes/arrival/arrival-3-w.jpg';
import arrival8 from '../../images/clothes/arrival/arrival-4-w.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const dataArrivals = [
    {
        id: 1,
        category: "Polo",
        name: 'Beige luxury polo shirt',
        price: 59.99,
        url: arrival1
    },
    {
        id: 2,
        category: "Shirt",
        name: 'Blue elegant shirt',
        price: 69.99,
        url: arrival2
    },
    {
        id: 3,
        category: "Shirt",
        name: 'Dark blue elegant shirt',
        price: 109.99,
        url: arrival3
    },
    {
        id: 4,
        category: "Jeans",
        name: 'Regular fit jeans',
        price: 89.99,
        url: arrival4
    },
    {
        id: 5,
        category: "Jumpsuits",
        name: 'Black elegant jumpsuit',
        price: 99.99,
        url: arrival5
    },
    {
        id: 6,
        category: "Dresses",
        name: 'Short black leather dress',
        price: 129.99,
        url: arrival6
    },
    {
        id: 7,
        category: "Sweatshirts",
        name: 'Luxury sweatshirt',
        price: 79.99,
        url: arrival7
    },
    {
        id: 8,
        category: "Jackets",
        name: 'Quilted moleskin jacket',
        price: 199.99,
        url: arrival8
    }
];


export default function Arrivals() {
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
