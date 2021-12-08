import React from 'react';
import { MdComputer,MdOutlineEditCalendar } from "react-icons/md";
import { FaGraduationCap,FaUserTie,FaBriefcase } from "react-icons/fa";
import { Link} from "react-router-dom";
import "./styles.css";

export const Principal = () => {
  return (
    <>
      <div className="banner">
        <div className="present ">
          <h1><MdOutlineEditCalendar/> Sistema de Gestión de Horarios </h1><br/>
          <h2> Ingeniería de Sistemas </h2><hr/>
          <Link to="/admin/login" ><button type="button" className="log"><FaUserTie/> Admin </button></Link>
          <Link to="/docent/login" ><button type="button" className="log"><FaBriefcase/> Docentes </button></Link> 
          <Link to="/estudent/login" ><button type="button" className="log"><FaGraduationCap/> Estudiantes </button></Link> 

          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title"><MdComputer/> Misión </h4>
                  <p className="card-text">Formar profesionales integrales en el área de los sistemas, 
                  con competencias científicas, disciplinares y humanas que les permitan liderar 
                  procesos de desarrollo tecnológico a nivel regional y nacional, en capacidad de 
                  tomar decisiones con sentido crítico para proponer soluciones óptimas en el manejo 
                  de la información del mundo empresarial, y de adaptarse al cambio para interpretar 
                  los avances y transformaciones que vive la sociedad actual.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title"><MdComputer/>  Visión</h4>
                  <p className="card-text">La Carrera de Ingeniería de Sistemas, se ubicará como promotor del 
                  avance tecnológico, a nivel local, nacional e internacional, permitiendo la interacción de 
                  saberes y apropiamiento de las tecnologías computacionales que faciliten el manejo de la 
                  información y la creación de modelos organizacionales, pretendiendo que los profesionales 
                  asuman un liderazgo en el avance científico y tecnológico en las ciencias de la Ingeniería 
                  de Sistemas, lo que permitirá ayudar a enfrentar y poner a la altura mundial el desarrollo de la región.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};