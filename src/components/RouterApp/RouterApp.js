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
import { AsignarMateriasComponent } from '../AsignarMaterias/AsignarMateriasComponent';
import { HorariosComponent } from '../Horarios/HorariosComponent';
import { ModificarHorarioComponent } from '../Horarios/ModificarHorarioComponent';
import Principal from '../principal/Principal';
import RolesDocentes from '../RolesPermisos/RolesDocente';
import RolesEstudiantes from '../RolesPermisos/RolesEstudiante';
import Docentes from '../CargaHoraria/Docentes';
import { Crear } from '../MateriaCarga/Componentes/CrearMateria/Crear';
import { Editar } from '../MateriaCarga/Componentes/Editar/Editar';
import { MatApp } from '../MateriaCarga/MatApp';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { MainDashBoard } from '../dashboard/MainDashBoard';
import { Autenticacion } from '../auth/Autenticacion';
import "../../styles/styles.css"
import { DashboardDocente } from '../SubsistemaDocente/DashboardDocente';
import {VerHorarios}from '../SubsistemaDocente/VerHorarios'
import {VerHorariosAsignados}from '../SubsistemaDocente/VerHorariosAsignados'



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
                <Route exact path="/materiacarga/crearmateria" component={Crear}/>
                <Route exact path="/materiacarga/editarmateria" component={Editar}/>
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