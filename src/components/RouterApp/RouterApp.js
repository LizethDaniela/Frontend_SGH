import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginComponent } from '../auth/LoginComponent';
import { RegisterEstudentsComponent } from '../auth/RegisterEstudentsComponent';
import { RegisterDocentsComponent } from '../auth/RegisterDocentsComponent';
import { AsignarMateriasComponent } from '../ProgramarMaterias/AsignarMateriasComponent';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { MainDashBoard } from '../dashboard/MainDashBoard';
import "../../styles/styles.css"

export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/registerdocentes" component= {RegisterDocentsComponent}/>
                <Route exact path="/registerestudents" component={RegisterEstudentsComponent}/>
                <Route exact path="/asignarmaterias" component= {AsignarMateriasComponent}/>
                <Route path="/main" component={MainDashBoard}/>
                <Route path="/" component={DashBoardComponent}/>
            </Switch>
        </Router>
    );
};