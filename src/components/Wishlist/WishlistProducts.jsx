import React, {useContext} from 'react'
import { GlobalContext } from '../../GlobalState';
import CartProduct from '../Cart/CartProduct';

export default function WishlistProducts(props) {
    const location = props.location;
    const {wishlistContext} = useContext(GlobalContext)
    const [wishlist] = wishlistContext;
    return (
        <>
            {wishlist.map(item => {
                return <CartProduct location={location} key={item.id} data={item}/>
            })}
        </>
    )
}
