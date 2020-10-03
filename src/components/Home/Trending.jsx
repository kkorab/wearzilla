import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalState'
import TrendingItem from './TrendingItem'


export default function Trending() {
    const {productsContext} = useContext(GlobalContext);
    const [products,] = productsContext;
    const trendingItems = products.filter(product => product.trending === true);

    return (
        <section className="trending">
            <div className="container">
                <h2 className="section-title">Trending</h2>
                <div className="row flex-row">
                    <div className="col-cnt">
                        <TrendingItem data={trendingItems[0]}/>
                    </div>
                    <div className="col-cnt">
                        <TrendingItem data={trendingItems[1]}/>
                        <div className="sm-cnt">
                            <TrendingItem data={trendingItems[2]}/>
                            <TrendingItem data={trendingItems[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

