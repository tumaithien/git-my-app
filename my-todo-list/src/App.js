import React, { useState } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
// import tasks from './mocks/tasks';



function App(){
    // const [items, setItems] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [orderDir, setOrderDir] = useState('ASC');
    const [itemSelected, setItemSelected] = useState(null)
    // useEffect(() => {
    //     let initItemsFromStorage = JSON.parse(localStorage.getItem('task') || []);
    //     setItems(initItemsFromStorage)
    // }, []);
    // useEffect(()=>{
    //     localStorage.setItem('task', JSON.stringify(items));
    // },[items]);
    // const itemsAfterFillter = useMemo(() => {
    //     // // Search
    //     let _items = filter(items || [], (item) => {
    //         return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    //     });
    //     // // Sort
    //     _items = funcOrderBy(_items, [orderBy], [orderDir]);
    //     return _items
    // }, [items, strSearch, orderBy, orderDir])

    // function handleSubmit(item){
    //     let id      = null;
    //     let newItems = [...items]
    //     if(item.id !== '') { //edit
    //         newItems = reject(newItems, { id: item.id});
    //         id = item.id;
    //     } else { // add
    //         id = uuidv4();
    //     }

    //     setItems([
    //         ...newItems,
    //         {
    //             id      : id,
    //             name    : item.name,
    //             level   : +item.level
    //         }
    //     ])

    //     setIsShowForm(false)
        

    // }

    function handleEdit(item){
        setItemSelected(item)
    }

    // function handleDelete(id){
    //     const newItems = [...items]
    //     remove(newItems, (item)=> {
    //         return item.id === id;
    //     });
    //     setItems(newItems)
    // }

    const handleSort = (orderBy, orderDir) => {
        setOrderBy(orderBy)
        setOrderDir(orderDir)
    }



    
    // Search
    // let itemsAfterFillter = filter(items || [], (item) => {
    //     return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    // });   

    // // Sort
    // itemsAfterFillter = funcOrderBy(itemsAfterFillter, [orderBy], [orderDir]);  


    return (
        <div>
            {/* TITLE : START */}
            <Title />
            {/* TITLE : END */}

            {/* CONTROL (SEARCH + SORT + ADD) : START */}
            <Control 
                orderBy={orderBy}
                orderDir={orderDir}
                onClickSort={handleSort}
            />
            {/* CONTROL (SEARCH + SORT + ADD) : END */}

            {/* FORM : START */}
            <Form 
                    itemSelected={itemSelected}
                />
            {/* FORM : END */}

            {/* LIST : START */}
            <List 
                onClickEdit={handleEdit}
                />
            {/* LIST : END */}
        </div>
    );
}

export default App;
