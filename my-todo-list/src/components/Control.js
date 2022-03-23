import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actOpenForm, actToggleForm } from '../action';
import Search from './Search';
import Sort from './Sort';


const defaultBtn = ['btn', 'btn-block']
console.log(defaultBtn)
function Control(props) {
    const isShowForm = useSelector(state => state.isShowForm)
    const dispatch = useDispatch()
    function handleAdd(){
        props.onClickAdd();
        dispatch(actToggleForm())
    }
    let {orderBy, orderDir}  = props;

        const classBtn = isShowForm ? 
        [...defaultBtn, 'btn-success'] : 
        [...defaultBtn, 'btn-info']
        return (
            <div className="row">

                {/* SEARCH : START */}
                <Search onClickGo={props.onClickSearchGo}/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort 
                    onClickSort={props.onClickSort}
                    orderBy={orderBy}
                    orderDir={orderDir}
                />
                {/* SORT : END */}

                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    { <button onClick={handleAdd} type="button" className={classBtn.join(' ')}>
                        {
                            isShowForm ? 'Close Form' : 'Add Tasks'
                        }
                    </button> }
                </div>
                {/* ADD : END */}
            </div>
        );
}

export default Control;
