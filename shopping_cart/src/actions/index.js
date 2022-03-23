import * as types from './../contants/actionTypes'

export const actListProduct = () => {
    return{
        type: types.LIST_PRODUCT
    }
}

export const actBuyProduct = (product, quantity) => {
    return{
        type: types.BUY_PRODUCT,
        product, 
        quantity
    }
}

export const actUpdateProduct = (product, quantity) => {
    return{
        type: types.UPDATE_PRODUCT,
        product,
        quantity
    }
}

export const actDeleteProduct = (product) => {
    return{
        type: types.REMOVE_PRODUCT,
        product
    }
}

export const actChangeNoti = (content) => {
    return{
        type: types.CHANGE_NOTIFY,
        content
    }
}