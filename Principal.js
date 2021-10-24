import React from 'react';
import './Principal.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import EstudiantePermiso from '../permisos/EstudiantePermiso';
const principal = () => {
    return (
        
        <div className="container">
            
            <EstudiantePermiso/>
            <button onClick={EstudiantePermiso}><FontAwesomeIcon icon={faUsers} className="icon"/>
                <a href="./EstudiantePermisos.js" className="link">DOCENTES</a>
            </button>
            <button ><FontAwesomeIcon icon={faUsers} className="icon" />
                <a href="#" className="link">ESTUDIANTES</a>
            </button>
            
        </div>
       
    )
}

export default principal;
