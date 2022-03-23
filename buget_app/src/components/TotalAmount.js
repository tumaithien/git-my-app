import { formatStringAmount } from "../contants/helper"

function TotalAmount({total}) {
    return(
        <>
            <div className="budget__value">{formatStringAmount(total)}</div>
        </>
    )
}
export default TotalAmount
