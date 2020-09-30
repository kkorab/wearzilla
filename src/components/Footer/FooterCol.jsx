import React from 'react'

export default function FooterCol(props) {
    return (
        <div className="footer-col">
            <h4 className="footer-col-title">{props.data.headline}</h4>
            <ul className="footer-list">
                <li className="footer-list-item">
                <a href="#" className="footer-link">{props.data.listItem1}</a>
                </li>
                <li className="footer-list-item">
                    <a href="#" className="footer-link">{props.data.listItem2}</a>
                </li>
                <li className="footer-list-item">
                    <a href="#" className="footer-link">{props.data.listItem3}</a>
                </li>
                <li className="footer-list-item">
                    <a href="#" className="footer-link">{props.data.listItem4}</a>
                </li>
                <li className="footer-list-item">
                    <a href="#" className="footer-link">{props.data.listItem5}</a>
                </li>
            </ul>
        </div>
    )
}
