/*






import Principal from '../principal/Principal';




import { MainDashBoard } from '../SubsistemaAdmin/dashboard/MainDashBoard';
import { Autenticacion } from '../SubsistemaAdmin/auth/Autenticacion';







import "../../styles/styles.css"










export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                
                
               
            
               
        
                
           
             
               

                
                <Route exact path="" component={}/>
                <Route exact path="" component={}/>
                <Route exact path="" component={}/>

                <Route exact path="/main" component={MainDashBoard}/>
               

                <Route exact path="/" component={Autenticacion}/>
            </Switch>
        </Router>
    );
};
<Route  path="/dashboard/*" element={<Menu/>} />
        <Route  path="/dashboardDocentes/*" element={<MenuDocentes/>} />
        <Route  path="/dashboardEstudiantes" element={<MenuEstudiantes/>} />
*/
import React, {Fragment} from "react";
import { Route, Routes} from "react-router-dom";
import { Autenticacion } from '../SubsistemaAdmin/auth/Autenticacion';
import { LoginComponent } from '../SubsistemaAdmin/auth/LoginComponent';
import { MainDashBoard } from '../SubsistemaAdmin/dashboard/MainDashBoard';
import { RegisterDocentsComponent } from '../SubsistemaAdmin/auth/RegisterDocentsComponent';
import { DocentesList } from '../SubsistemaAdmin/auth/DocentesList';
import { RegisterEstudentsComponent } from '../SubsistemaAdmin/auth/RegisterEstudentsComponent';
import { EstudentesList } from '../SubsistemaAdmin/auth/EstudentesList';
import { AsignarMateriasComponent } from '../SubsistemaAdmin/AsignarMaterias/AsignarMateriasComponent';
import { HorariosComponent } from '../SubsistemaAdmin/Horarios/HorariosComponent';
import { ModificarHorarioComponent } from '../SubsistemaAdmin/Horarios/ModificarHorarioComponent';
import { MatApp } from '../SubsistemaAdmin/Materia/MatApp';
import { AmbientesComponent } from '../SubsistemaAdmin/Ambientes/AmbientesComponent';
import { LinksComponent } from '../SubsistemaAdmin/Ambientes/LinksComponent';

import { LoginDocente } from '../SubsistemaDocente/LoginDocente';
import { PrincipalDocente } from '../SubsistemaDocente/PrincipalDocente';
import {VerHorariosAsignados}from '../SubsistemaDocente/VerHorariosAsignados';
import {Solicitar}from '../SubsistemaDocente/Solicitar'

import { LoginEst } from '../SubsistemaEstudiantes/LoginEst';
import { Estudiante } from '../SubsistemaEstudiantes/Estudiante';
import { VerHorariosEst } from '../SubsistemaEstudiantes/VerHorariosEst';
import { ProgramarMaterias } from '../SubsistemaEstudiantes/ProgramarMaterias';

import "../../styles/styles.css"

function RouterApp() {
  
  return (
    <Fragment>
      <Routes>
      <Route  path="/" element={<Autenticacion/>} />
      <Route  path="/admin/login" element={<LoginComponent/>} />
      <Route  path="/admin/main" element={<MainDashBoard/>} />
      <Route  path="/admin/registerdocentes" element={<RegisterDocentsComponent/>} />
      <Route  path="/admin/registerdocentes/listadocent" element={<DocentesList/>} />
      <Route  path="/admin/registerestudents" element={<RegisterEstudentsComponent/>} />
      <Route  path="/admin/registerestudents/listaestudents" element={<EstudentesList/>} />
      <Route  path="/admin/asignarmaterias" element={<AsignarMateriasComponent/>} />
      <Route  path="/admin/horarios" element={<HorariosComponent/>} />
      <Route  path="/admin/horarios/modificar" element={<ModificarHorarioComponent/>} />
      <Route  path="/admin/materias" element={<MatApp/>} />
      <Route  path="/admin/ambientes" element={<AmbientesComponent/>} />
      <Route  path="/admin/ambientes/links" element={<LinksComponent/>} />

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