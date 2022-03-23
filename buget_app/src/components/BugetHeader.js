import {useBudget} from '../hook/useBudget'
import TotalAmount from './TotalAmount'
import TotalIncome from './TotalIncome'
import TotalExpenses from './TotalExpenses'
function BugetHeader() {
    const {dataIncomes, dataExpenses, totalBudgetMonth} = useBudget()
    return (
        <div className="top">
            <div className="budget">
            <div className="budget__title">
                    Available Budget in <span className="budget__title--month">%Month%</span>:
                    <TotalAmount total={totalBudgetMonth} />
            </div>
                <TotalIncome data={dataIncomes} />
                <TotalExpenses data={dataExpenses} total={dataIncomes} />
            </div>
        </div>
    )
}
export default BugetHeader