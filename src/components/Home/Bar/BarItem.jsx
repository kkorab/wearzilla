import React from 'react'

export default function BarItem(props) {
    return (
        <div className="bar-item">
            <i className={props.i}></i>
            <div className="bar-item-desc">
                <h4 className="bar-item-headline">{props.headline}</h4>
                <p className="bar-item-subheadline">{props.subheadline}</p>
            </div>
        </div>
    )
}
