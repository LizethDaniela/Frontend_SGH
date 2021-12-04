import React from 'react'
import Head from '../head/Head'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import './NavBarDoc.css';

export const Ajustes = () => {
    return (<>
    <Head/>
        <div>
            <nav className="navbar">
                <Link to="/principaldoc" > <h4><FaHome/></h4></Link>
                <Link to="/horariosasig" >Horarios Asignados</Link>
                <Link to="/ajustes" >Reajuste de horarios</Link>
                <button type="button" className="btn btn-secondary">Cerrar Sesión</button>  
            </nav>
            <div className="container">
            <h3> Reajuste de Horarios </h3>
            </div>
        </div>
        </>
    )
}
