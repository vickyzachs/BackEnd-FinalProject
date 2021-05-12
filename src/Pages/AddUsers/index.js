import axios from "axios";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import NavBar from "../../Component/NavBar";


const AddUsers = () => {

    const [email, setEmail] = useState ("");
    const [fullName, setFullName] = useState ("");

    let history = useHistory();

    const AddUser = () => {
        const data = {
            fullName: fullName,
            email: email,
            avatar: "https://reqres.in/img/faces/10-image.jpg",
        };
        Axios.post('http://localhost:3004/users', data);
        console.log(data);
        history.push('/')
    };  

    return (
        //JSX
        <div className="container">
            <NavBar />
            <h3>Add User</h3>
            <p className="form-label mt-5">Full Name</p>
            <input 
                className="form-control"
                placeholder="Insert Full Name" 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)}
            />
            <p className="form-label">Email</p>
            <input 
                className="form-control"
                placeholder="Insert Email"  
                value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <br/>
            <button type="button" class="btn btn-primary" onClick={AddUser}>Add User</button>
        </div> 
    )
}

export default AddUsers;

