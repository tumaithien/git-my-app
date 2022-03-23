import { v4 as uuidv4 } from 'uuid';
import { ACT_ADD_INCOME, ACT_DELETE_ITEM } from '../contants/actionTypes';


function getDataFromLocalStorage() {
    try {
        const dataFromLocalStorage = localStorage.getItem('listItem') || '[]'
        return JSON.parse(dataFromLocalStorage)
    } catch (error) {
        return []
    }
}
const initState = {
    listDataIncome: getDataFromLocalStorage()
}
function reducer(state = initState, action) {
    switch (action.type) {
        case ACT_DELETE_ITEM:
             const idDeleted = action.payload.id
             const dataIncomeAfterDelete = state.listDataIncome
             .filter(dataItem => {
                 return dataItem.id !== idDeleted
             })
            //  const dataIncomeAfterDelete = remove(state.listDataIncome, (item) => {
            //      return item.id !== idDeleted
            //  })
            // localStorage.setItem('listItem', JSON.stringify(dataIncomeAfterDelete))
            return {
                ...state,
                listDataIncome: dataIncomeAfterDelete
            }
        case ACT_ADD_INCOME:
            const data = action.payload.data
            return {
                ...state,
                listDataIncome: [
                    ...state.listDataIncome, 
                    {
                        id: uuidv4(),
                        description: data.description,
                        amount: data.sign === '+' ? data.amount : data.amount * (-1)
                    }
                ]
            }
        default:
            return state
    }
    
}

export default reducer