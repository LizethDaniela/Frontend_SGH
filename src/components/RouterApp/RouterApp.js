import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Principal } from '../principal/Principal';

import { LoginDocente } from '../SubsistemaDocente/LoginDocente';
import { Estudiante } from '../SubsistemaEstudiantes/Estudiante';

import { MainDashBoard } from '../SubsistemaAdmin/dashboard/MainDashBoard';
//LOGIN ADMINISTRADOR
import { LoginComponent } from '../SubsistemaAdmin/auth/LoginComponent';
//DOCENTES
import { RegisterDocentesComponent } from '../SubsistemaAdmin/Docente/RegisterDocentesComponent';
import { ContainerDocentesListComponent } from '../SubsistemaAdmin/Docente/ContainerDocentesListComponent';
////STUDENTS
import { RegisterStudentsComponent } from '../SubsistemaAdmin/Estudiante/RegisterStudentsComponent';
import { ContainerStudentsListComponent } from '../SubsistemaAdmin/Estudiante/ContainerStudentsListComponent';
//ASIGNAR MATERIAS
import { AsignarMateriasComponent } from '../SubsistemaAdmin/AsignarMaterias/AsignarMateriasComponent';
//HORARIOS
import { HorariosComponent } from '../SubsistemaAdmin/Horarios/HorariosComponent';
import { ModificarHorarioComponent } from '../SubsistemaAdmin/Horarios/ModificarHorarioComponent';

import RolesDocentes from '../SubsistemaAdmin/RolesPermisos/RolesDocente';
import RolesEstudiantes from '../SubsistemaAdmin/RolesPermisos/RolesEstudiante';
//MATERIAS
import { MatApp } from '../SubsistemaAdmin/Materia/MatApp';
//AMBIENTES
import { AmbientesComponent } from '../SubsistemaAdmin/Ambientes/AmbientesComponent';
import { LinksComponent } from '../SubsistemaAdmin/Ambientes/LinksComponent';

import {VerHorarios}from '../SubsistemaDocente/VerHorarios'
import {VerHorariosAsignados}from '../SubsistemaDocente/VerHorariosAsignados'

import "../../styles/styles.css"




export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component= {Principal}/>

                <Route exact path="/login" component={LoginComponent}/>

                <Route exact path="/logdocent" component={LoginDocente}/>
                <Route exact path="/princestud" component={Estudiante}/>

                <Route exact path="/mainDashboard" component={MainDashBoard}/>

                <Route exact path="/docentes/registerdocentes" component= {RegisterDocentesComponent}/>
                <Route exact path="/docentes/docenteslist" component= {ContainerDocentesListComponent}/>

                <Route exact path="/students/registerstudents" component= {RegisterStudentsComponent}/>
                <Route exact path="/students/estudentslist" component= {ContainerStudentsListComponent}/>

                <Route exact path="/asignarmaterias" component={AsignarMateriasComponent}/>

                <Route exact path="/horarios" component={HorariosComponent}/>
                <Route exact path="/modificar" component={ModificarHorarioComponent}/>
                
                <Route exact path="/materiacarga" component={MatApp}/>

                <Route exact path="/ambientes" component={AmbientesComponent}/>
                <Route exact path="/links" component={LinksComponent}/>

                <Route exact path="/verhorarios" component={VerHorarios}/>
                <Route exact path="/verhorariosasignados" component={VerHorariosAsignados}/>

            </Switch>
        </Router>
    );
};