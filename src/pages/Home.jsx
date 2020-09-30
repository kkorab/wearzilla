import React from 'react'
import Arrivals from '../components/Home/Arrivals';
import Bar from '../components/Home/Bar/Bar';
import Hero from '../components/Home/Hero';
import Trending from '../components/Home/Trending';

export default function Home() {
    return (
        <div className="home">
            <Hero/>
            <Trending/>
            <Bar/>
            <Arrivals/>
        </div>
    )
}
