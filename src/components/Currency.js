import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = ()=>{
    const {currency,dispatch} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const action = {
        type: 'CHG_CURRENCY',
        payload: newCurrency
    }
    const handleCurrencyChange = (event) => {
        const updatedCurrency = event.target.value;
        setNewCurrency(updatedCurrency);
        const action = {
            type: 'CHG_CURRENCY',
            payload: updatedCurrency
        }
        dispatch(action);
    }
    return (
        <div>
        <label htmlFor="change-currency">Currency</label>
        <select id="change-currency" onChange={handleCurrencyChange}>
            <option defaultValue>(£ Pound)</option>
            <option value="$" name="$">$ Dollar</option>
            <option value="£" name="£">£ Pound</option>
            <option value="€" name="€">€ Euro</option>
            <option value="₹" name="₹">₹ Ruppee</option>
        </select>
        </div>
    );
}

export default Currency;