import React from 'react'
import BarItem from './BarItem'

export default function Bar() {
    return (
        <div className="bar">
            <div className="container bar-flex">
                <BarItem i="fas fa-truck" headline="Payment & Delivery" subheadline="Free shipping for orders over $50"/>
                <BarItem i="fas fa-undo" headline="Return & Refund" subheadline="Free 100% money back guarantee"/>
                <BarItem i="fas fa-shield-alt" headline="Secure Payment" subheadline="100% secure payment"/>
                <BarItem i="fas fa-headset" headline="Quality Support" subheadline="Always online feedback 24/7"/>
            </div>
        </div>
    )
}
