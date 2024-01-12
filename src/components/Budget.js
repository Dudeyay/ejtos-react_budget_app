import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenditure = expenses.reduce((total, item)=>{
            return total + item.cost;
        },0);
        if (event.target.value > 20000) {
            alert('The Budget cannot exceed 20000!');
        } else if (event.target.value < totalExpenditure) {
            alert('You cannot reduce the Budget lower than the spending');
        } else {
            setNewBudget(event.target.value);
            const action = {type: 'SET_BUDGET', payload: newBudget};
            dispatch(action);
        }
        
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span><input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
