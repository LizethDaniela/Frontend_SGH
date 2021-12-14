import React from 'react'
import { MdLockOpen } from "react-icons/md";
import { FaUserShield} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import {  useNavigate  } from "react-router-dom";
import { authLogoutAsync } from '../../../actions/auth';
import "./DashSty.css"

export const DashBoardComponent = ({ children, ...rest }) => {
    const navigate = useNavigate();
    const {auth} = useSelector(state => state);
    const { token } = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
        navigate("/");
        
    };
    return (
        token == null? (<>{navigate("/")}</>): (<>
            
            <div className="sidebar">
                <header><FaUserShield/> Administrador</header>
                <ul>

                <li><NavLink to="/admin/registeradmin">Administrador</NavLink></li>
                    <li><NavLink to="/admin/registerdocentes">Docentes</NavLink></li>
                    <li><NavLink to="/admin/registerestudents">Estudiantes</NavLink></li>
                    <li><NavLink to="/admin/materias">Materias</NavLink></li>
                    <li><NavLink to="/admin/semestres">Semestres</NavLink></li>
                    <li><NavLink to="/admin/ambientes">Ambientes</NavLink></li>
                    <li><NavLink to="/admin/asignarmaterias">Asignar Materias</NavLink></li>
                    <li><NavLink to="/admin/horarios">Horarios</NavLink></li>
                    <li onClick={handlerLogout}><NavLink to="/"><MdLockOpen />Logout</NavLink></li>
                </ul>
            </div>
        </>)
    );
};