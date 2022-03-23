const defaultState = false
const isShowForm = (state = defaultState, action) => {
    switch (action.type) {
        case 'CLOSE_FORM':
            return state = false
        case 'OPEN_FORM':
            return state = true
        case 'TOGGLE_FORM':
            return !state
        default: 
        return state;
    }

}

export default isShowForm