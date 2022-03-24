import * as types from '../contants/actionTypes'

const initState = ''

const search = (state = initState, action) => {
    switch (action.type) {
        case types.ACT_CHANGE_SEARCH:
            return action.search
        default: 
        return state;
    }
}

export default search