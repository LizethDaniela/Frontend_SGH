import React from 'react'
import { Link } from 'react-router-dom';
import Head from '../head/Head';
import { FaHome } from "react-icons/fa";
export const ProgramarMaterias = () => {
    return (
        <>
            <Head/>
            <div>
                <nav className="navbar">
                    <Link to="/princestud" > <h4><FaHome/></h4></Link>
                    <Link to="/verhorarios" >Ver Horarios</Link>
                    <Link to="/programat" >Programar Materias</Link>
                    <button type="button" className="btn btn-secondary">Cerrar Sesión</button>  
                </nav>
                <div className="container">
                <h3>  aqui se podran programar materias  </h3>
                </div>
            </div>
        </>
           
      
    )
}
