import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { authLogoutAsync } from '../../actions/auth';
import { useNavigate } from "react-router-dom";
import "./dashstyles.css";


export const DashDocente= () => {
    
    return (
        <>
            
            <div className="sidebar">
                <header>Docente</header>
                <ul>
                    <li><Link to="/docent/verhorariosasignados"> Ver Horarios Asignados</Link></li>
                    <li><Link to="/docent/reajuste">Reajuste de Horarios</Link></li>
                    <li> <a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
        </>
    );
};