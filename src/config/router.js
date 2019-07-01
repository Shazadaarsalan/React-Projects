import React from 'react';
import UserRegistrationForm from '../Components/UserRegistrationForm'
import RestaurantsRegistrationForm from '../Components/RestarauntsRegistrationForm'
import Login from '../config/firebase'
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Start from '../Screens/StartPage'
import Dashboard from '../Components/dashboard'
import MyRequest from '../Components/MyRequest'

import Details from '../Components/Detailed';

function Navigations() {
    return (
  
        <Router>
     

            
            <div>
                <Route exact path="/" component={Start}/>
                <Route  path="/Login" component={Login} /> 
                <Route  path="/UserRegistration" component={UserRegistrationForm} /> 
                <Route  path="/RestarauntRegistration" component={RestaurantsRegistrationForm} /> 
                <Route  path="/Dashboard" component={Dashboard} /> 
                <Route  path="/detailedScreen" component={Details} /> 
                <Route  path="/MyRequest" component={MyRequest} />
                {/* this.props.match.params.username */}
            </div>
        </Router>
    );
}

export default Navigations