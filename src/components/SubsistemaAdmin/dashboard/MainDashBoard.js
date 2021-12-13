import React from 'react'
import { Outlet } from 'react-router';
import {FaUserGraduate,FaBriefcase,FaRegBuilding ,FaBook,FaUserCheck,FaPhoneSquareAlt,FaFacebookSquare} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Head from '../../head/Head';
import { DashBoardComponent } from './DashBoardComponent';
import "./stylesMain.css"
import { Footer } from '../../footer/Footer';
import "./DashSty.css";

export const MainDashBoard = () => {
    return (
        <>
            <Head/>
            <DashBoardComponent/>
            <Outlet/>
            <div className="container">
            <div className="submenu">
            
            </div>
            <div className="informacion">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Perfil Profecional <FaUserCheck/></a>
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
/*<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
                    Docentes
				</div>
                    <div class="full-box tile-number">
                        <div className="tile-icons">
                            < FaBriefcase />
                        </div> 
                        <p>7  </p>
                        <small>Registrados</small>
                    </div>
			</article>
			<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
					Estudiantes
				</div>
				<div class="full-box tile-number text-titles">
                    <div className="tile-icons">
                    <FaUserGraduate />
                    </div> 
					<p >10</p>
					<small>Registrados</small>
				</div>
			</article>
			<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
					Materias
				</div>
				<div class="full-box tile-number text-titles">
                    <div className="tile-icons">
                    <FaBook />
                    </div>  
					<p>70</p>
					<small>Registradas</small>
				</div>
			</article>
			<article class="full-box tile">
				<div class="full-box tile-title text-center text-titles text-uppercase">
					Ambientes 
				</div>
				<div class="full-box tile-number text-titles">
                    <div className="tile-icons">
                        <FaRegBuilding />
                    </div> 
					<p> 70</p>
					<small> Registrados</small>
				</div>
			</article>*/