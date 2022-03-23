import * as types from './../contants/actionTypes'
import * as config from './../contants/config'

let initState = config.NOTI_READY_TO_BUY;

const notify = (state = initState, action) => {
    switch (action.type) {
        case types.CHANGE_NOTIFY:
            return action.content
        default:
            return state;
    }
}

export default notify