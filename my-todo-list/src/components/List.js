import React from 'react';
import {useSelector} from 'react-redux'
import Item from './Item';

function List (props) {
    const items   = useSelector(state => state.items);
    let elmItems  = <tr><td colSpan={4}>Không có công việc</td></tr>
    if(items.length > 0){
        elmItems = items.map((item, index) => {
            return (
                <Item 
                    onClickDelete={props.onClickDelete} 
                    onClickEdit={props.onClickEdit} 
                    key={index} 
                    item={item} 
                    index={index} />
            );
        })
    }
        return (
            <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th style={{width: '10%'}} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{width: '20%'}} className="text-center">Level</th>
                            <th style={{width: '20%'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            elmItems
                        }

                    </tbody>
                </table>
            </div>
        );
}

export default List;
