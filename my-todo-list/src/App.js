import React, {  } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Search from './components/Search';
import ToggleForm from './components/ToggleForm'
import Sort from './components/Sort';



function App(){
    return (
        <div>
            <Title />
            <div className="row">
                <Search />
                <Sort />
                <ToggleForm />
            </div>
            <Form/>
            <List/>
        </div>
    );
}

export default App;
