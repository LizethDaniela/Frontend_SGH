import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginComponent } from '../SubsistemaAdmin/auth/LoginComponent';
import { RegisterEstudentsComponent } from '../SubsistemaAdmin/auth/RegisterEstudentsComponent';
import { RegisterDocentsComponent } from '../SubsistemaAdmin/auth/RegisterDocentsComponent';
import { AsignarMateriasComponent } from '../SubsistemaAdmin/AsignarMaterias/AsignarMateriasComponent';
import { HorariosComponent } from '../SubsistemaAdmin/Horarios/HorariosComponent';
import { ModificarHorarioComponent } from '../SubsistemaAdmin/Horarios/ModificarHorarioComponent';
import Principal from '../principal/Principal';
import RolesDocentes from '../SubsistemaAdmin/RolesPermisos/RolesDocente';
import RolesEstudiantes from '../SubsistemaAdmin/RolesPermisos/RolesEstudiante';
import Docentes from '../SubsistemaAdmin/CargaHoraria/Docentes';

import { MatApp } from '../SubsistemaAdmin/Materia/MatApp';
import { DashBoardComponent } from '../SubsistemaAdmin/dashboard/DashBoardComponent';
import { MainDashBoard } from '../SubsistemaAdmin/dashboard/MainDashBoard';
import { Autenticacion } from '../SubsistemaAdmin/auth/Autenticacion';
import "../../styles/styles.css"
import { DashboardDocente } from '../SubsistemaDocente/DashboardDocente';
import {VerHorarios}from '../SubsistemaDocente/VerHorarios'
import {VerHorariosAsignados}from '../SubsistemaDocente/VerHorariosAsignados'
import { AmbientesComponent } from '../SubsistemaAdmin/Ambientes/AmbientesComponent';



export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/registerdocentes" component= {RegisterDocentsComponent}/>
                <Route exact path="/registerestudents" component={RegisterEstudentsComponent}/>
                <Route exact path="/asignarmaterias" component={AsignarMateriasComponent}/>
                <Route exact path="/horarios" component={HorariosComponent}/>
                <Route exact path="/modificar" component={ModificarHorarioComponent}/>
                <Route exact path="/principal" component={Principal}/>
                <Route exact path="/rolesdocente" component={RolesDocentes}/>
                <Route exact path="/rolesestudiante" component={RolesEstudiantes}/>
                <Route exact path="/cargahorariadocente" component={Docentes}/>
                <Route exact path="/materiacarga" component={MatApp}/>
                <Route exact path="/ambientes" component={AmbientesComponent}/>
                <Route exact path="/Dashboard" component={DashBoardComponent}/>
                <Route exact path="/DashboardDocente" component={DashboardDocente}/>
                <Route path="/verhorarios" component={VerHorarios}/>
                <Route path="/verhorariosasignados" component={VerHorariosAsignados}/>
                <Route exact path="/Dashboard" component={DashBoardComponent}/>
                <Route path="/main" component={MainDashBoard}/>
                <Route path="/" component={Autenticacion}/>
            </Switch>
        </Router>
    );
};