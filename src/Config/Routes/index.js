import React from 'react';
import  {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from '../../Pages/About';
import Dashboard from '../../Pages/Dashboard';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';




const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
        </Router>
    )
}

export default Routes;
