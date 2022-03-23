import { useState } from "react";
import {useDispatch} from 'react-redux';
import helpers from "../helper";
import { actDeleteProduct, actChangeNoti, actUpdateProduct } from '../actions/index'
import * as config from '../contants/config'
import Validate from "../helper/validate";
function CartItem({index, cartItem}) {
    const price = helpers.toCurrency(cartItem.product.price,"$","right");
    const dispatch = useDispatch()
    const [newProduct, setNewProduct] = useState({
        value: 0
    });
    function handleChange(evt){
        const target = evt.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }
    
    let quantity = (newProduct.value !== 0) ? newProduct.value : cartItem.quantity;
    // Button change quantity product in cart
    // function increaseProduct(){
    //     setNewProduct({...newProduct,
    //         value: quantity + 1
    //     })
    // }
    // function decrementProduct(){
    //     setNewProduct({...newProduct,
    //         value: quantity - 1
    //     })
    // }
    function showSubTotal(price, quantity) {
        let result = null;
        result = helpers.toCurrency(price * quantity, "USD", "right")
        return result;
    }
    function handleDelete(product){
        dispatch(actDeleteProduct(product))
        dispatch(actChangeNoti(config.NOTI_ACT_DELETE));
    }
    function handleUpdate(product, quantity) {
        if(Validate.checkQuantity(+quantity) === false){
            dispatch(actChangeNoti(config.NOTI_GREATER_THAN_ONE))
        }else{
            dispatch(actUpdateProduct(product, +quantity))
            dispatch(actChangeNoti(config.NOTI_ACT_UPDATE))
        }
    }
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{cartItem.product.name}</td>
                <td>{price}</td>
                <td className="">
                    {/* <button onClick={decrementProduct} className="btn btn-outline-primary">-</button> */}
                    <input name="value" type="number" onChange={handleChange} min={1} value={quantity} />
                    {/* <button onClick={increaseProduct} className="btn btn-outline-primary">+</button> */}
                </td>
                <td><strong>{showSubTotal(cartItem.product.price, quantity)}</strong></td>
                <td>
                    <a onClick={() => handleUpdate(cartItem.product, quantity)} className="label label-info update-cart-item" href="!#" type="button" data-product>Update</a>
                    <a onClick={() => handleDelete(cartItem.product)} href="!#" type="button" className="label label-danger delete-cart-item">Delete</a>
                </td>
            </tr>
        </>
    )
}

export default CartItem