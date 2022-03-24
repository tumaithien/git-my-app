import React from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggleForm from './ToggleForm';

function Control(props) {
    let {orderBy, orderDir}  = props;
        return (
            <div className="row">
                <Search onClickGo={props.onClickSearchGo}/>
                <Sort 
                    onClickSort={props.onClickSort}
                    orderBy={orderBy}
                    orderDir={orderDir}
                />
                <ToggleForm />
            </div>
        );
}

export default Control;
