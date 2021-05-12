import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const Register = () => {

    const [email, setEmail] = useState("");
    const [fullName, setFullname] = useState("");
    const [userName, setUserName] =useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    let history = useHistory();

    const onSubmit = () => {

    const data = {
        email: email,
        fullName: fullName,
        userName: userName,
        phoneNumber: phoneNumber,
        address: address
    };
        // //direct to 
        history.push('login')
        console.log(data)
    };

    return (
        <div className="container mt-5">
            <h3>Register</h3>
            <p className="mt-4">Full Name</p>
        <input
            className="form-control"
            placeholder="Insert Your Full Name"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            />
        <p className="mt-4">Username</p>
        <input
            className="form-control"
            placeholder="Insert Your Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <p className="mt-4">Email</p>
        <input
            className="form-control"
            placeholder="Insert Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        <p className="mt-4">Phone Number</p>
        <input
            className="form-control"
            placeholder="Insert Your Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
        <p className="mt-4">Address</p>
        <input
            className="form-control"
            placeholder="Insert Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
        <br />
        <br />
        <button type="button" onClick={onSubmit} className="btn btn-primary">
            Register
        </button>
        </div>
    )
}

export default Register;