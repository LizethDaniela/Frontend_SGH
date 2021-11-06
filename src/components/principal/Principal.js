import React from 'react';
import './Principal.css';
//import {BrowserRouter as Router, Route, Switch, Lin} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import Head from '../head/Head';
import {Link} from "react-router-dom";
//import EstudiantePermiso from '../permisos/EstudiantePermiso';
//import { Link } from "react-router-dom";
const Principal = () => {
    return (
        <React.Fragment>
            <Head/>
        <div className="container-log">
            
        <Link to="/rolesdocente">
           <button className="link" className="button-log">DOCENTES<FontAwesomeIcon icon={faUsers} className="icon"/>
        </button> </Link>
        <Link to="/rolesestudiante">
            <button className="button-log">ESTUDIANTES<FontAwesomeIcon icon={faUsers} className="icon" />
                
            </button>
           </Link> 
            
        </div>
        </React.Fragment>
    );
};

export default Principal;
