import {remove, reject} from 'lodash';
import * as types from '../contants/actionTypes'
import * as config from '../contants/config'
import {v4 as uuidv4} from 'uuid'
let defaultState = []
let initItemsFromStorage = JSON.parse(localStorage.getItem('task'));
defaultState = (initItemsFromStorage !== null && initItemsFromStorage.length > 0) ? initItemsFromStorage : defaultState


const items = (state = defaultState, action) => {
    let id = null
    switch (action.type) {
        case types.ACT_DELETE_ITEM:
            id = action.id;
            remove(state, (item)=> {
                return item.id === id;
            });
            localStorage.setItem(config.ITEMS_FORM_LOCALSTORAGE, JSON.stringify(state))
            return [...state]

        case types.ACT_HANDLE_SUBMIT:
            id = null;
            let {item} = action
            if(item.id !== '') { //edit
                state = reject(state, { id: item.id});
                id = item.id;
            } else { // add
                id = uuidv4();
            }
            state.push({
                id: id,
                level: +item.level,
                name: item.name
            });
            localStorage.setItem(config.ITEMS_FORM_LOCALSTORAGE, JSON.stringify(state))
            return [...state]
        default:
        return state;
    }

}

export default items