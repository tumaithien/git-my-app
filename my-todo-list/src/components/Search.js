import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actSearch } from '../action';

function Search () {
    const strSearch = useSelector(state => state.search)
    const dispatch = useDispatch()

    function handleClear(){
        dispatch(actSearch(''))
    }

    function handleChange(event){
        dispatch(actSearch(event.target.value))
    }

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input value={strSearch} onChange={handleChange} type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                    <button onClick={handleClear} className="btn btn-warning" type="button">Clear</button>
                </span>
            </div>
        </div>
    );
}

export default Search;
