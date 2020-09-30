import React from 'react'
import FooterCol from './FooterCol'

const footerData = [
    {
        headline: "about us",
        listItem1: "community",
        listItem2: "career",
        listItem3: "shipping",
        listItem4: "contact us",
        listItem5: "wearzilla"
    },
    {
        headline: "Information",
        listItem1: "Payment",
        listItem2: "Returns",
        listItem3: "Shipping methods",
        listItem4: "Delivery & Shipping",
        listItem5: "Conformity of the products"
    },
    {
        headline: "our services",
        listItem1: "Free shipping",
        listItem2: "Free Returns",
        listItem3: "Our Franchising",
        listItem4: "Terms & Conditions",
        listItem5: "Privacy Policy"
    },
    {
        headline: "Social Media",
        listItem1: (<i className="fab fa-facebook-f center"></i>),
        listItem2: (<i className="fab fa-instagram center"></i>),
        listItem3: (<i className="fab fa-tiktok center"></i>)
    }
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-flex">
                {footerData.map((item,index) => {
                    return <FooterCol key={index+100} data={item}/>
                })}
            </div>
            <div className="footer-line"></div>
            <div className="container">
                <h4 className="footer-subheadline"> &copy; 2020 WearZilla</h4>
            </div>
        </footer>
    )
}
