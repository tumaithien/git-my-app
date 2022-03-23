import { useSelector } from "react-redux";
import {sumBy} from 'lodash'
import CartItem from "./CartItem";
import Notify from "./Notify";
import helpers from "../helper";

function Cart() {
    const items = useSelector(state => state.cart)
    function showElementBody(items){
        let xhtml = null;
        if(items.length > 0){
            xhtml = items.map((cartItem, index) => {
                return(
                    <CartItem key={index + "-" + cartItem.quantity} cartItem={cartItem} index={index} />
                )
            })
        }
        return xhtml
    }
    function showElementFooter(items) {
        let thtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>;
        if(items.length > 0){
            let totalQuantity = sumBy(items, 'quantity')
            let totalPrice = sumBy(items, (item) => {
                return item.product.price * item.quantity
            })
            thtml = <tr>
                        <td colSpan={4}>There are <b>{totalQuantity}</b> items in your shopping cart.</td>
                        <td colSpan={2} className="total-price text-left">{helpers.toCurrency(totalPrice, "USD", "right")}</td>
                    </tr>
        }
        return thtml = <tfoot id="my-cart-footer">{thtml}</tfoot>
    }
    return (
        <div className="col-xs-12 col-sm-6 col-md-7 col-lg-7">
            <div className="panel panel-danger">
                <div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div>
                <div className="panel-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="4%">#</th>
                                <th>Pokemon</th>
                                <th width="15%">Price</th>
                                <th width="4%">Quantity</th>
                                <th width="20%">Subtotal</th>
                                <th width="25%">Action</th>
                            </tr>
                        </thead>
                        <tbody id="my-cart-body">
                            {showElementBody(items)}
                        </tbody>
                        {showElementFooter(items)}
                    </table>
                </div>
            </div>
            <Notify />
        </div>
    )
}

export default Cart;