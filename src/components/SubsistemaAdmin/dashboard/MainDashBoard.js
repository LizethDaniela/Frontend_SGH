import React from 'react'
import { Outlet } from 'react-router';
import {FaUserGraduate,FaBriefcase,FaRegBuilding ,FaBook,FaUserCheck,FaPhoneSquareAlt,FaFacebookSquare} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Head from '../../head/Head';
import { DashBoardComponent } from './DashBoardComponent';
import "./stylesMain.css"
import { Footer } from '../../footer/Footer';
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
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Perfil Profecional <FaUserCheck/></a>
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