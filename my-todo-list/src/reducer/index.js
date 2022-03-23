import {combineReducers} from 'redux'
import isShowForm from "./isShowForm"
import sort from "./sort"
import items from './items'
import search from './search'
import itemSelected from './itemSelected'

const appReducer = combineReducers({
    isShowForm: isShowForm,
    sort: sort,
    items: items,
    search: search,
    itemSelected: itemSelected
})

export default appReducer;