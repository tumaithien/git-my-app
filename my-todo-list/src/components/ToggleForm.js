import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actToggleForm } from '../action';


const defaultBtn = ['btn', 'btn-block']
console.log(defaultBtn)
function ToggleForm() {
    const isShowForm = useSelector(state => state.isShowForm)
    const dispatch = useDispatch()
    const toggleForm = () => {
        dispatch(actToggleForm())
    }
        const classBtn = isShowForm ? 
        [...defaultBtn, 'btn-success'] : 
        [...defaultBtn, 'btn-info'] 
        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                { <button onClick={toggleForm} type="button" className={classBtn.join(' ')}>
                    {
                        isShowForm ? 'Close Form' : 'Add Tasks'
                    }
                </button> }
            </div>
        );
}

export default ToggleForm;
