import React from 'react'
import Head from '../head/Head';
import { DashDocente } from './DashDocente';
import {FaUserCheck,FaPhoneSquareAlt,FaFacebookSquare} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Footer } from '../footer/Footer';

export const PrincipalDocente= () => {
    return (
    <>
        <Head/>
        <DashDocente/>
            <div className="container">
            <div className="informacion">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Informacion General <FaUserCheck/></a>
                    </li>
                </ul>

                <p> -Planificar, desarrollar, gestionar, adaptar, aplicar, mantener y evaluar sistemas de información, 
                    operacionales, administrativos, productivos, tecnológicos y de gerencia proponiendo soluciones ingenieriles 
                    preventivas y correctivas a problemas complejo-conflictivos, con un enfoque holístico.<br/>
                    -Desarrollar modelos para definir estrategias de toma de decisiones utilizando herramientas 
                    de simulación y optimización en ámbitos multi, trans e inter-disciplinarios, implementando e
                    implantando soluciones ingenieriles de control y automatización de procesos.<br/>
                    -Aptitud e interés por las Matemáticas, la Física , los Sistemas y la Informática.<br/>
                    -Capacidad de trabajo en grupo e interdisciplinarios.<br/>
                    -Emprendedor y Líder.<br/>
                    -Ético, responsable y comprometido con la sociedad.<br/>
                    -Espíritu investigativo, creativo e innovador.<br/>
                    -Capacidad para comunicarse y relacionarse con los demás.<br/>
                    -Capacidad para la toma de decisiones.
                </p> 
                
            
                
            </div>
            <div className="img">
                <img src={'/imgauth/ciudadela.jpg'} className="img"/>
            </div>
            </div>
            <Footer/>
        </>
    );
};