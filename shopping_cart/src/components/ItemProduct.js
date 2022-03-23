import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { actBuyProduct, actChangeNoti } from '../actions';
import helpers from "../helper";
import Validate from '../helper/validate';
import * as configs from '../contants/config'
function ItemProduct({items}) {
    const price = helpers.toCurrency(items.price,"USD","right");
    const dispatch = useDispatch()

    const [newProduct, setNewProduct] = useState({
        value: 1
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
    function handleClick(items) {
        let quantity = +newProduct.value;
        if(Validate.checkQuantity(quantity) === false){
            dispatch(actChangeNoti(configs.NOTI_GREATER_THAN_ONE))
        }else{
            dispatch(actBuyProduct(items, quantity))
            dispatch(actChangeNoti(configs.NOTI_ACT_ADD))
        }
        setNewProduct({value : 1})
    }
    return (
        <div className="media product">
            <div className="media-left">
                <a href="!#">
                    <img className="media-object" src={require(`../assets/images/${items.image}`)} alt={items.name} />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{items.name}</h4>
                <p>{items.summary}</p>
                <input name="value" type="number" value={newProduct.value} onChange={handleChange} min={1} />
                {
                    items.canBuy 
                    ? <button onClick={() => handleClick(items)} className="price" > {price} </button> 
                    : <span className="price"> {price}</span>
                }
            </div>
        </div>
    )
}
export default ItemProduct