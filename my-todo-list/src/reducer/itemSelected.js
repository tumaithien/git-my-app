import * as types from '../contants/actionTypes'
let defaultState = {
    id: '',
    name: '',
    level: 0
}
const itemSelected = (state = defaultState, action) => {
    switch (action.type) {
        case types.ACT_ITEM_SELECTED:
            return action.item
        case types.ACT_UNSELECT_ITEM:
            return {id: '', name: '', level: 0}
        default:
        return state;
    }

}

export default itemSelected