import {useState, useRef} from 'react'
import cls from 'classnames'
import {useDispatch} from 'react-redux'
import { actAddIncome } from '../store/actions';
function BugetForm() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        sign: '+',
        description: '',
        amount: ''
    });
    const refElmInput = useRef(null)
    function onChangeData(evt) {
        let key = evt.target.name
        let value = evt.target.value

        if(key === 'amount' && value !== ''){
            value = Number(value);
            
        }
        if(value < 0){
            return
        }
        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleSubmit() {
       if(!formData.amount || !formData.description){
           return
       }
       dispatch(actAddIncome(formData))
       setFormData({
           sign: '+',
           description: '',
           amount: ''
       })
       refElmInput.current.focus()
    }
    function handleKeyUpAmount(evt){
        if(evt.key === 'Enter'){
            handleSubmit()
        }
    }

    return (
        <>
            <div className="add">
                <div className="add__container">
                    <select className={cls('add__type', {
                        'red-focus' : formData.sign === '-'
                    })} value={formData.sign} onChange={onChangeData} name="sign">
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input ref={refElmInput} value={formData.description} type="text" name='description' className={cls('add__description', {
                        'red-focus' : formData.sign === '-'
                    })} placeholder="Add description" onChange={onChangeData} />
                    <input value={formData.amount} type="number" name='amount' className={cls('add__value', {
                        'red-focus' : formData.sign === '-'
                    })} placeholder="Value" onChange={onChangeData} onKeyUp={handleKeyUpAmount} />
                    <button className="add__btn" onClick={handleSubmit}><i className="ion-ios-checkmark-outline" /></button>
                </div>
            </div>
        </>
    )
}

export default BugetForm