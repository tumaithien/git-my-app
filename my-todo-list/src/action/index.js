import * as types from "../contants/actionTypes"


export const actCLoseForm =() => {
    return {
        type: types.CLOSE_FORM
    }
}
export const actOpenForm =() => {
    return {
        type: types.OPEN_FORM
    }
}
export const actToggleForm =() => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const actSort =(orderBy, orderDir) => {
    return {
        type: types.ACT_SORT,
        orderBy,
        orderDir
    }
}
export const actSearch = (search) => {
    return {
        type: types.ACT_CHANGE_SEARCH,
        search
    }
}

export const actDelete = (id) => {
    return {
        type: types.ACT_DELETE_ITEM,
        id
    }
}

export const actSubmit = (item) =>{
    return {
        type: types.ACT_HANDLE_SUBMIT,
        item
    }
}
export const actItemSelected = (item) => {
    return {
        type: types.ACT_ITEM_SELECTED,
        item
    }
}

export const actUnSelectItem = () => {
    return {
        type: types.ACT_UNSELECT_ITEM
    }
}