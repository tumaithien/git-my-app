import * as types from '../contants/actionTypes'
const defaultState = false
const isShowForm = (state = defaultState, action) => {
    switch (action.type) {
        case types.CLOSE_FORM:
            return state = false
        case types.OPEN_FORM:
            return state = true
        case types.TOGGLE_FORM:
            return !state
        default: 
        return state;
    }

}

export default isShowForm