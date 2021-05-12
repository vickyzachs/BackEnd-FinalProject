import React, {useState, useEffect} from 'react';
import Card from '../../Component/Molecules/Card';
import NavBar from '../../Component/NavBar';
import Axios from 'axios';



const Dashboard = () => {

    const[users, setUsers]= useState ([]);


    useEffect(() => {
        //fetch
        // fetch('https://reqres.in/api/users')
        // .then(res => res.json())
        // .then((json) => setUsers(json.data))
        //Axios (npm install axios)
        Axios.get('http://localhost:3004/users')
        .then((res) => 
         setUsers(res.data)
        // console.log(res.data)
        )
    }, [users])

    //console.log(users); //testing
    return (
        //JSX
        <div className="container">
            <NavBar />
            <h3>Dashboard</h3>
            <hr />
            <div className="row align-items-start">
                {
                    users.map((item) =>[
                        <>
                        <Card 
                            avatar={item.avatar}
                            fullName={`${item.first_name} ${item.last_name}`}
                            email={item.email}
                        />
                        </>
                    ])
                }
            </div>
        </div>
    );
};

export default Dashboard;
