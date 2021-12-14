import React from 'react';
import Head from '../head/Head';
import { DashEstudiante } from './DashEstudiante';
import {FaUserCheck,FaPhoneSquareAlt,FaFacebookSquare} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Footer } from '../footer/Footer';


export const Estudiante= () => {

    return (
    <>

            <Head/>
            <DashEstudiante/>
            <div className="container">
            <div className="informacion">
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Informacion General <FaUserCheck/></a>
                </li>
                </ul>
                <label>CI:</label><br/>5412035<hr/>
                <label>Nombres:</label><br/>Liam <hr/>
                <label>Ap. Paterno:</label><br/>Ramos<hr/>
                <label>Ap. Materno</label><br/>Ruiz<hr/>
                <label>Fecha de Nacimiento:</label><br/>15/10/1990<hr/>
                <label>Email:</label><br/>liam@gmail.com<hr/>
                <label>Telefono:</label><br/>45123654<hr/>
            
                
            </div>
            <div className="img">
                <img src={'/imgauth/ciudadela.jpg'} className="img"/>
            </div>
            
            
            </div>
            <Footer/>
        
    </>
    );
};