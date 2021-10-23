import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginComponent } from '../auth/LoginComponent';
import { RegisterComponent } from '../auth/RegisterComponent';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { MainDashBoard } from '../dashboard/MainDashBoard';
import "../../styles/styles.css"
import { RegisterEstudentsComponent } from '../auth/RegisterEstudentsComponent';



export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/register" component={RegisterComponent}/>
                <Route exact path="/registere" component={RegisterEstudentsComponent}/>
                <Route path="/main" component={MainDashBoard}/>
                <Route path="/" component={DashBoardComponent}/>
            </Switch>
        </Router>
    );
};