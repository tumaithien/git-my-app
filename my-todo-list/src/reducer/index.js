import {combineReducers} from 'redux'
import isShowForm from "./isShowForm"
import sort from "./sort"
import items from './items'

const appReducer = combineReducers({
    isShowForm: isShowForm,
    sort: sort,
    items
})

export default appReducer;