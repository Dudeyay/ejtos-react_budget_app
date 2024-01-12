import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);

    return (
        <table className='table'>
            <thead className='thead-light'>
            <tr>
                <th>Department</th>
                <th>Allocated Budget</th>
                <th>Increase by 10</th>
                <th>Decrease by 10</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => {
                    return <ExpenseItem id={expense.name} cost={expense.cost} name={expense.name} key={expense.id} />
                })}
            </tbody>
        </table>
    );
}

export default ExpenseList;