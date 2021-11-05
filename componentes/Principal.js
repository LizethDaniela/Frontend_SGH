import React from 'react';
import './Principal.css';
//import {BrowserRouter as Router, Route, Switch, Lin} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import Head from './Head';
//import EstudiantePermiso from '../permisos/EstudiantePermiso';
//import { Link } from "react-router-dom";
const Principal = () => {
    return (
        <React.Fragment>
            <Head/>
        <div className="container-log">
            
          
           <button className="link" className="button-log"><FontAwesomeIcon icon={faUsers} className="icon"/>
           <a href="./roles/DocenteRol.js" className="link">DOCENTE</a>
            </button>
            <button className="button-log"><FontAwesomeIcon icon={faUsers} className="icon" />
                <a href="#" className="link">ESTUDIANTES</a>
            </button>
            
            
        </div>
        </React.Fragment>
    );
};

export default Principal;
