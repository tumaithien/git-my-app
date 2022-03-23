import { useEffect } from "react"
import { useSelector } from "react-redux"
import { totalAmount } from "../contants/helper"

function useBudget(){
    const listData = useSelector(state => state.listDataIncome)
    const listIncome = listData.filter(dataItem => dataItem.amount > 0)
    const listExpenses = listData.filter(dataItem => dataItem.amount < 0)
    const dataIncomes = totalAmount(listIncome)
    const dataExpenses = totalAmount(listExpenses)
    const totalBudgetMonth = dataIncomes - (dataExpenses * (-1))
    useEffect(() => {
        localStorage.setItem('listItem', JSON.stringify(listData))
    }, [listData])

    return{
        dataIncomes,
        totalBudgetMonth,
        listIncome,
        listExpenses,
        dataExpenses
    }
}
export {
    useBudget
}