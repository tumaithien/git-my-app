import {useBudget} from '../hook/useBudget'

import BugetExpenses from "./BugetExpenses"
import BugetIncome from "./BugetIncome"

function BugetList() {
    const {listIncome, listExpenses, dataIncomes} = useBudget()
    return (
        <>
            <div className="container clearfix">
                <BugetIncome listIncome={listIncome} />
                <BugetExpenses listExpenses={listExpenses} total={dataIncomes} />
            </div>
        </>
    )
}

export default BugetList