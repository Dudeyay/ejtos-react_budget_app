import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (prop) => {
    const {dispatch,currency} = useContext(AppContext);
    const handleDeleteExpense = () => {
        const action = {type: 'DELETE_EXPENSE', payload: prop.id};
        dispatch(action);
    }

    const increaseAllocation = () => {
        const expense = {
            name: prop.name,
            cost: 10
        };
        const action = {type: 'ADD_EXPENSE', payload: expense};
        dispatch(action);
    }
    const decreaseAllocation = () => {
        const expense = {
            name: prop.name,
            cost: 10
        };
        const action = {type: 'RED_EXPENSE', payload: expense};
        dispatch(action);
    }

    return (
        <tr>
            <td>{prop.name}</td>
            <td>{currency}{prop.cost}</td> 
            <td><button style={{ borderRadius: '50%', backgroundColor: 'lightgreen', color: 'white', fontSize: '1em', fontWeight: 'bold' }} onClick={increaseAllocation}>+</button></td> 
            <td><button style={{ borderRadius: '50%', backgroundColor: 'red', color: 'white', fontSize: '1em', fontWeight: 'bold' }} onClick={decreaseAllocation}> - </button></td> 
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td> 
        </tr>
    );
}

export default ExpenseItem;