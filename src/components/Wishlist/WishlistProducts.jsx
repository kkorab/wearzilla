import React, {useContext} from 'react'
import { GlobalContext } from '../../GlobalState';
import CartProduct from '../Cart/CartProduct';
// import WishlistProduct from './WishlistProduct'


export default function WishlistProducts(props) {
    const location = props.location;
    const {wishlistContext} = useContext(GlobalContext)
    const [wishlist, setWishlist] = wishlistContext;
    return (
        <>
            {wishlist.map(item => {
                return <CartProduct location={location} key={item.id} data={item}/>
                // return <WishlistProduct key={item.id} data={item}/>
            })}
        </>
    )
}
