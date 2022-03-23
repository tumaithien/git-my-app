import React, { useMemo } from 'react';
import {useSelector} from 'react-redux'
import Item from './Item';
import {filter, includes, orderBy as funcOrderBy } from 'lodash';
function List () {
    const items   = useSelector(state => state.items);
    const strSearch = useSelector(state => state.search);
    const sort = useSelector(state => state.sort);
    const {orderBy, orderDir} = sort
    // // Search
    const itemsAfterFilter = useMemo(() => {
        let _items = filter(items || [], (item) => {
            return includes(item.name.toLowerCase(), strSearch.toLowerCase());
        });
        return _items
    },[items, strSearch]);
    const itemsAfterSort = useMemo(() => {
        let _items = funcOrderBy(itemsAfterFilter, [orderBy], [orderDir]);
        return _items
    }, [itemsAfterFilter, orderBy, orderDir])
    let elmItems  = <tr><td colSpan={4}>Không có công việc</td></tr>
    if(itemsAfterSort.length > 0){
        elmItems = itemsAfterSort.map((item, index) => {
            return (
                <Item 
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
