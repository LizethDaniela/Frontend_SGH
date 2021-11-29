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


import { MatApp } from '../SubsistemaAdmin/Materia/MatApp';
import { MainDashBoard } from '../SubsistemaAdmin/dashboard/MainDashBoard';
import { Autenticacion } from '../SubsistemaAdmin/auth/Autenticacion';


import {VerHorarios}from '../SubsistemaDocente/VerHorarios'
import {VerHorariosAsignados}from '../SubsistemaDocente/VerHorariosAsignados'
import { AmbientesComponent } from '../SubsistemaAdmin/Ambientes/AmbientesComponent';
import { LoginDocente } from '../SubsistemaDocente/LoginDocente';

import "../../styles/styles.css"
import { Estudiante } from '../SubsistemaEstudiantes/Estudiante';
import { LinksComponent } from '../SubsistemaAdmin/Ambientes/LinksComponent';
import { DocentesList } from '../SubsistemaAdmin/auth/DocentesList';
import { EstudentesList } from '../SubsistemaAdmin/auth/EstudentesList';


export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/registerdocentes" component= {RegisterDocentsComponent}/>
                <Route exact path="/listdoc" component= {DocentesList}/>
                <Route exact path="/registerestudents" component={RegisterEstudentsComponent}/>
                <Route exact path="/estlist" component= {EstudentesList}/>
                <Route exact path="/asignarmaterias" component={AsignarMateriasComponent}/>
                <Route exact path="/horarios" component={HorariosComponent}/>
                <Route exact path="/modificar" component={ModificarHorarioComponent}/>
                <Route exact path="/principal" component={Principal}/>
                <Route exact path="/materiacarga" component={MatApp}/>
                <Route exact path="/ambientes" component={AmbientesComponent}/>
                <Route exact path="/links" component={LinksComponent}/>
               
        
                <Route exact path="/logdocent" component={LoginDocente}/>
                <Route exact path="/verhorarios" component={VerHorarios}/>
                <Route exact path="/verhorariosasignados" component={VerHorariosAsignados}/>
               
                <Route exact path="/princestud" component={Estudiante}/>

                <Route exact path="/main" component={MainDashBoard}/>
               

                <Route exact path="/" component={Autenticacion}/>
            </Switch>
        </Router>
    );
};