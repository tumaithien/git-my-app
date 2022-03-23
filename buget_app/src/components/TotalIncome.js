import { formatStringAmount } from "../contants/helper"

function TotalIncome({data}) {
    return (
        <>
            <div className="budget__income clearfix">
                <div className="budget__income--text">Income</div>
                <div className="right">
                    <div className="budget__income--value">{formatStringAmount(data)}</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                </div>
            </div>
        </>
    )
}

export default TotalIncome
