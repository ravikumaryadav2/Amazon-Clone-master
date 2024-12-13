import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { Link, useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(Value)=>( 
            <>
                <p>
                    Subtotal({basket?.length} items): <strong>{Value}</strong> 
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
            )}
            decimalScale = {2}
            value = {getBasketTotal(basket)} 
            displayType = {"text"}
            thousandSeparator = {true}
            prefix={"$"}
            />

            <button onClick={e=> navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal