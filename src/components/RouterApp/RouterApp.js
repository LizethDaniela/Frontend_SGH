import React, {Fragment} from "react";
import { Route, Routes} from "react-router-dom";

import { Principal } from '../principal/Principal';
import { LoginComponent } from '../SubsistemaAdmin/auth/LoginComponent';
import { MainDashBoard } from '../SubsistemaAdmin/dashboard/MainDashBoard';
//ADMINS
import { RegisterAdministradorComponent } from '../SubsistemaAdmin/Administrador/RegisterAdministradorComponent';
import { ContainerAdministradorListComponent } from '../SubsistemaAdmin/Administrador/ContainerAdministradorListComponent';
//ROLES
import { ContainerRolesListComponent } from "../SubsistemaAdmin/Roles/ContainerRolesListComponent";
//PERMISOS
import { ContainerPermisosListComponent } from "../SubsistemaAdmin/Permisos/ContainerPermisosListComponent";
//DOCENTES
import { RegisterDocentesComponent } from '../SubsistemaAdmin/Docente/RegisterDocentesComponent';
import { ContainerDocentesListComponent } from '../SubsistemaAdmin/Docente/ContainerDocentesListComponent';

////STUDENTS
import { RegisterStudentsComponent } from '../SubsistemaAdmin/Estudiante/RegisterStudentsComponent';
import { ContainerStudentsListComponent } from '../SubsistemaAdmin/Estudiante/ContainerStudentsListComponent';
// ASIGNAR MATERIAS
import { AsignarMateriasComponent } from '../SubsistemaAdmin/AsignarMaterias/AsignarMateriasComponent';
//MATERIAS
import { ContainerMateriasListComponent } from '../SubsistemaAdmin/Materia/ContainerMateriasListComponent';

//AMBIENTES
import { ContainerAmbientesListComponent } from '../SubsistemaAdmin/Ambientes/ContainerAmbientesListComponent';

//SEMESTRES
import { ContainerSemestresListComponent } from '../SubsistemaAdmin/Semestre/ContainerSemestresListComponent';
//HORARIOS
import { HorariosComponent } from '../SubsistemaAdmin/Horarios/HorariosComponent';
import { ModificarHorarioComponent } from '../SubsistemaAdmin/Horarios/ModificarHorarioComponent';

//SUB SISTEMA DOCENTE
import { LoginDocente } from '../SubsistemaDocente/LoginDocente';
import { PrincipalDocente } from '../SubsistemaDocente/PrincipalDocente';
import {VerHorariosAsignados}from '../SubsistemaDocente/VerHorariosAsignados';
import {Solicitar}from '../SubsistemaDocente/Solicitar'
//SUBSISTEMA ESTUDIANTE
import { LoginEst } from '../SubsistemaEstudiantes/LoginEst';
import { Estudiante } from '../SubsistemaEstudiantes/Estudiante';
import { VerHorariosEst } from '../SubsistemaEstudiantes/VerHorariosEst';
import { ProgramarMaterias } from '../SubsistemaEstudiantes/ProgramarMaterias';

import "../../styles/styles.css"

function RouterApp() {
  
  return (
    <Fragment>
      <Routes>
          <Route  path="/" element={<Principal/>} />
          <Route  path="/admin/login" element={<LoginComponent/>} />
          <Route  path="/admin/main" element={<MainDashBoard/>} />

          <Route  path="/admin/registeradmin" element={<RegisterAdministradorComponent/>} />
          <Route  path="/admin/registeradmin/listadmins" element={< ContainerAdministradorListComponent/>} />

          <Route path="/admin/roles" element= {<ContainerRolesListComponent />}/>

          <Route path="/admin/permisos" element= {<ContainerPermisosListComponent />}/>

          <Route  path="/admin/registerdocentes" element={<RegisterDocentesComponent/>} />
          <Route  path="/admin/registerdocentes/listadocent" element={< ContainerDocentesListComponent/>} />

          <Route  path="/admin/registerestudents" element={<RegisterStudentsComponent/>} />
          <Route  path="/admin/registerestudents/listaestudents" element={<ContainerStudentsListComponent/>} />

          <Route  path="/admin/asignarmaterias" element={<AsignarMateriasComponent/>} />

          <Route  path="/admin/materias" element={<ContainerMateriasListComponent />} />

          <Route  path="/admin/ambientes" element={<ContainerAmbientesListComponent/>} />

          <Route  path="/admin/semestres" element={<ContainerSemestresListComponent />} />
          
          <Route  path="/admin/horarios" element={<HorariosComponent/>} />
          <Route  path="/admin/horarios/modificar" element={<ModificarHorarioComponent/>} />
      


          <Route  path="/docent/login" element={<LoginDocente/>} />
          <Route  path="/docent/main" element={<PrincipalDocente/>} />
          <Route  path="/docent/verhorariosasignados" element={<VerHorariosAsignados/>} />
          <Route  path="/docent/reajuste" element={<Solicitar/>} />

          <Route  path="/estudent/login" element={<LoginEst/>} />
          <Route  path="/estudent/main" element={<Estudiante/>} />
          <Route  path="/estudent/verhorarios" element={<VerHorariosEst/>} />
          <Route  path="/estudent/programaciones" element={<ProgramarMaterias/>} />

        
      </Routes>
    </Fragment>
  );
}

export default RouterApp;
