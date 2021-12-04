import React from 'react'
import { MdComputer,MdOutlineEditCalendar } from "react-icons/md";
import {  FaGraduationCap,FaUserTie,FaBriefcase} from "react-icons/fa";
import "./auten.css";
import {
    Link
  } from "react-router-dom";

export const Autenticacion = () => {
  return (<>
    <div className="banner">
      <div className="present ">
      <h1><MdOutlineEditCalendar/>    Sistema de Gestión de Horarios</h1><br></br>
       <h1>Ingeniería de Sistemas </h1><hr/>
       <Link to="/login" ><button type="button" className="log"><FaUserTie/> Admin</button></Link>
       <Link to="/logdocent" ><button type="button" className="log"><FaBriefcase/> Docentes</button></Link> 
       <Link to="/loginest" ><button type="button" className="log"><FaGraduationCap/> Estudiantes</button></Link> 

       <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"><MdComputer/>  Misión</h4>
              <p class="card-text">Formar profesionales integrales en el área de los sistemas, con competencias científicas, disciplinares y humanas que les permitan liderar procesos de desarrollo tecnológico a nivel regional y nacional, en capacidad de tomar decisiones con sentido crítico para proponer soluciones óptimas en el manejo de la información del mundo empresarial, y de adaptarse al cambio para interpretar los avances y transformaciones que vive la sociedad actual.</p>
              
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title"><MdComputer/>  Visión</h4>
              <p class="card-text">La Carrera de Ingeniería de Sistemas, se ubicará como promotor del avance tecnológico, a nivel local, nacional e internacional, permitiendo la interacción de saberes y apropiamiento de las tecnologías computacionales que faciliten el manejo de la información y la creación de modelos organizacionales, pretendiendo que los profesionales asuman un liderazgo en el avance científico y tecnológico en las ciencias de la Ingeniería de Sistemas, lo que permitirá ayudar a enfrentar y poner a la altura mundial el desarrollo de la región.</p>
              
            </div>
          </div>
        </div>
      </div>
      
       
          
          
      </div>
    </div>
    </>
  );
};