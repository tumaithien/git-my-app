import {combineReducers} from 'redux'
import isShowForm from "./isShowForm"
import sort from "./sort"
import items from './items'
import search from './search'

const appReducer = combineReducers({
    isShowForm: isShowForm,
    sort: sort,
    items: items,
    search: search
})

export default appReducer;