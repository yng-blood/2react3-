import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./UserForm.css";

const FunctionalUserForm = () => {
    const [state, setName] = useState({
        name: "",
        department: "",
        rating: ""
    });

    var data = [];

    const changeHandler = (e) => {
        console.log('e',e.target.name)
        setName({...state,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        if(!localStorage.getItem('Details')) {
            data.push(state)
            localStorage.setItem('Details', JSON.stringify(data));
        } else {
            data.push(state);
            JSON.parse(localStorage.getItem('Details')).forEach(element => {
                data.push(element)
            });
            localStorage.setItem('Details', JSON.stringify(data));
        }
    }

    return (
        <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>
            <label>Name:</label>
            <input type="text" name="name" value={state.name} onChange={changeHandler}/>
            <br/>
            <label>Department:</label>
            <input type="text" name="department" value={state.department} onChange={changeHandler}/>
            <br/>
            <label>Rating:</label>
            <input type="number" name="rating" value={state.rating} onChange={changeHandler}/>
            <br/>
            <Link to="/userTile"><button type="submit" onClick={handleSubmit}>Submit</button></Link>
        </form>
        </div>
    )
}

export default FunctionalUserForm