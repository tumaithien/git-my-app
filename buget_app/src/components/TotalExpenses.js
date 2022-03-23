import { formatPercent, formatStringAmount } from "../contants/helper"

function TotalExpenses({data, total}) {
    return (
        <>
            <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value">{formatStringAmount(data)}</div>
                    <div className="budget__expenses--percentage">{formatPercent(data, total)}</div>
                </div>
            </div>
        </>
    )
}

export default TotalExpenses