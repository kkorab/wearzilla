
import React, { useContext} from 'react'
import { GlobalContext } from '../../GlobalState'

export default function CartTotal() {
    const {functionsContext} = useContext(GlobalContext);
    const [, , , , , , addTotals, , , clearCart] = functionsContext;

    return (
            <div className="shopping-card-total">
                <div className="container card-total-flex">
                    <button onClick={() => clearCart()} className="btn">clear cart</button>
                    <div className="shopping-card-total-price">
                    <h5>total:<span className="card-total-price"> ${addTotals()}</span></h5>
                    </div>
                    <button className="btn btn-checkout">checkout</button>
                </div>
            </div>
    )
}
