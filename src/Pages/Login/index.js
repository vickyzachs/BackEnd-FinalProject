import React, { useState } from "react";
import {useHistory} from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    

    let history = useHistory();

    const handleSubmit = () => {
        const data = {
            email: email,
            password: password,
        };
        console.log(data);
        history.push('/')
    };  

    const register = () => {
        history.push('/register')
    };
    return (
        //JSX
        <div className="container mt-5">
            <h3>Login</h3>
            <p className="form-label mt-5">Email</p>
            <input 
                className="form-control"
                placeholder="Masukkan Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
            />
            <p className="form-label">Password</p>
            <input 
                className="form-control"
                placeholder="Masukkan Password" 
                type="password" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <br/>
            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Sign In</button>
            <br/>
            <button type="button" class="btn btn-primary" onClick={register}>Registration</button>
        </div> 
    )
}

export default Login;

