import {remove} from 'lodash'
import * as types from '../contants/actionTypes'
import * as config from '../contants/config'

let initState = []
let cartItem = JSON.parse(localStorage.getItem(config.CARTS_FROM_LOCAL_STORAGE));
initState = (cartItem !== null && cartItem.length > 0) ? cartItem : initState;

let getProductPosition = (cartItem, product) => {
    let total = cartItem.length;
    for(let i=0; i< total; i++){
        if(cartItem[i].product.id === product.id){
            return i;
        }
    }
    return -1;
}
const cart = (state = initState, action) => {
    let {product, quantity} = action;
    let position = -1
    switch (action.type) {
        case types.BUY_PRODUCT:
            position = getProductPosition(state, product);
            if(position > -1){
                state[position].quantity += quantity;
            }else{
                state.push({product, quantity})
            }
            localStorage.setItem(config.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state]

        case types.UPDATE_PRODUCT:
            position = getProductPosition(state, product);
            if(position > -1){
                state[position].quantity = quantity;
            }
            localStorage.setItem(config.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state]

        case types.REMOVE_PRODUCT:
            remove(state, (cartItem) => {
                return cartItem.product.id === product.id
            })
            localStorage.setItem(config.CARTS_FROM_LOCAL_STORAGE, JSON.stringify(state))
            return [...state]
        default:
            return state;
    }
}

export default cart