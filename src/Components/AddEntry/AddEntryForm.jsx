import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] =useState('');

    function handleSumbit(event) {
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.AddNewEntryProperty(newEntry)
    }

    return ( 
        <form onSubmit={handleSumbit}>
            <label>Weight</label>
            <input type='number' value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            <label>Date</label>
            <input type ='date' value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddEntryForm;