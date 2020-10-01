import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { GlobalContext } from '../../GlobalState'
import TrendingItem from './TrendingItem'

const cntVariant = {
    hidden: {
        opacity: 0,
        y: 50
    },
    hover: {
        opacity: 1,
        y: 0
    }
}

const trendingVariant = {
    hover: {
        opacity: 1,
    }
}

const btnVariant = {
    hidden: {
        y: -50,
        opacity: 0
    },
    hover: {
        y: 0,
        opacity: 1
    }
}

export default function Trending() {
    const [color, setColor] = useState(false);
    const [isMobileSize, setIsMobileSize, products, setProducts] = useContext(GlobalContext);
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
