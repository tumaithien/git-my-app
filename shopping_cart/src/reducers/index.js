import {combineReducers} from 'redux'
import product from './product'
import cart from './cart'
import notify from './notify'

const rootReducer = combineReducers({
    product: product,
    cart: cart,
    notify: notify
});

export default rootReducer