import {createStore} from 'redux';

let initState = {
    items: [],
    isShowForm: false,
    strSearch: '',
    orderBy: 'name',
    orderDir: 'asc',
    itemSelected: null
}
let appReducer = (state = initState, action) => {
    return state;
}
const store = createStore(appReducer)
console.log(store.getState())
export default store