import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actCLoseForm } from '../action';

function Form(props) {
    const [newTaskItems, setNewTaskItems] = useState({
        task_id: '',
        task_name: '',
        task_level: 0
    })
    const isShowForm = useSelector(state => state.isShowForm)
    const dispatch = useDispatch()
    useEffect(() => {
        const item = props.itemSelected;
        if(item){
            setNewTaskItems({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level
            })
        }
    },[props.itemSelected])

    function handleChange(event) {
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        setNewTaskItems({
            ...newTaskItems,
            [name]: value
        })

    }

    function handleSubmit(event) {
        event.preventDefault();
        let item = {
            name: newTaskItems.task_name,
            id: newTaskItems.task_id,
            level: newTaskItems.task_level,
        };

        props.onClickSubmit(item);
    }

    function handleCancel(){
        dispatch(actCLoseForm())

    }
    if(!isShowForm) return null
    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form onSubmit={handleSubmit} className="form-inline">

                    <div className="form-group">
                        <label className="sr-only">label</label>
                        <input value={newTaskItems.task_name} onChange={handleChange} name="task_name" type="text" className="form-control" placeholder="Task Name" />
                    </div>

                    <div className="form-group">
                        <label className="sr-only">label</label>
                        <select value={newTaskItems.task_level} onChange={handleChange}  name="task_level" className="form-control" required="required" >
                    Small
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={handleCancel} type="button" className="btn btn-default">Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
