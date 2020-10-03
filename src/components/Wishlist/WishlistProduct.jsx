import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalState'


export default function WishlistProduct(props) {
    const {functionsContext} = useContext(GlobalContext);
    const [getItem, handleDetails, addToCart, increment, decrement, removeItem, addTotals, addToWishlist, removeFromWishlist] = functionsContext;
    const {id, url, name, price, inCart, inWishlist} = props.data
    return (
        <div className="wishlist-row">
        <div className="cart-product-desc">
            <img className="cart-product-img" src={url} alt="cart product"/>
            <h5 className="product-name">{name}</h5>
        </div>
        <div className="cart-product-price">
        <h5>${price}</h5>
        </div>
        <h4 className="wishlist-stockstatus to-hide">
            In stock
        </h4>
        <button
        onClick={() => removeFromWishlist(id)} 
        className="delete-btn">
            <i className="far fa-trash-alt"></i>
        </button>
        <button className="add-to-cart" disabled={inCart ? true : false}>
            <i className="fas fa-shopping-cart wishlist-icon"></i><span className="to-hide">{inCart ? "In Cart" : "add to cart"}</span>
        </button>
    </div>
    )
}


// export default function WishlistProduct(props) {
//     const {functionsContext} = useContext(GlobalContext);
//     const [getItem, handleDetails, addToCart, increment, decrement, removeItem, addTotals, addToWishlist, removeFromWishlist] = functionsContext;
//     const {id, url, name, price, inCart, inWishlist} = props.data
//     return (
//         <div className="wishlist-row">
//         <div className="cart-product-desc">
//             <img className="cart-product-img" src={url} alt="cart product"/>
//             <h5 className="product-name">{name}</h5>
//         </div>
//         <div className="cart-product-price">
//         <h5>${price}</h5>
//         </div>
//         <h4 className="wishlist-stockstatus to-hide">
//             In stock
//         </h4>
//         <button
//         onClick={() => removeFromWishlist(id)} 
//         className="delete-btn">
//             <i className="far fa-trash-alt"></i>
//         </button>
//         <button className="add-to-cart" disabled={inCart ? true : false}>
//             <i className="fas fa-shopping-cart wishlist-icon"></i><span className="to-hide">{inCart ? "In Cart" : "add to cart"}</span>
//         </button>
//     </div>
//     )
// }
