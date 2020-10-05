
import React, { useContext} from 'react'
import { GlobalContext } from '../../GlobalState';
import CartProduct from './CartProduct';

export default function CartProducts() {
    const {cartContext} = useContext(GlobalContext)
    const [cart] = cartContext;

    return (
        cart.map(item => {
            return (
                <CartProduct key={item.id} data={item}/>
            )
        })
    )
}
