import { ACT_ADD_INCOME, ACT_DELETE_ITEM } from "../contants/actionTypes"

export const actDeleteItems = (id) =>  {
    return {
        type: ACT_DELETE_ITEM,
        payload:{
            id
        }
    }
}
export const actAddIncome = (data) => {
    return{
        type: ACT_ADD_INCOME,
        payload: {
            data
        }
    }
}
