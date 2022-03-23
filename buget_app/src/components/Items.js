import { useDispatch } from "react-redux";
import { formatPercent, formatStringAmount } from "../contants/helper";
import { actDeleteItems } from "../store/actions";

function Items({data, total}) {
    const {id, amount, description} = data;
    const dispatch = useDispatch()
    function handleDelete(id) {
        dispatch(actDeleteItems(id))
    }

    return (
        <>
            <div className="item clearfix">
                <div className="item__description">{description}</div>
                <div className="right clearfix">
                    <div className="item__value">{formatStringAmount(amount)}</div>
                    {
                        amount < 0 && <div className="item__percentage">{formatPercent(amount, total)}</div>
                    }
                    <div className="item__delete">
                        <button className="item__delete--btn" onClick={() => {handleDelete(id)}}>
                            <i className="ion-ios-close-outline" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items