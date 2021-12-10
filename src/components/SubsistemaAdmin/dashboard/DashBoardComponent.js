import React from 'react';
import { MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { authLogoutAsync } from '../../../actions/auth';
import "./DashSty.css"

export const DashBoardComponent = () => {
    const {auth} = useSelector(state => state);
    const { token } = auth;
    const dispatch = useDispatch();

    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        token == null? (<Navigate to="/"/>) : (<>
            <div className="sidebar">
                <header> Administrador </header>
                <ul>
                    <li><Link to="/admin/registeradmin">Administrador</Link></li>
                    <li><Link to="/admin/roles">Roles</Link></li>
                    <li><Link to="/admin/permisos">Permisos</Link></li>
                    <li><Link to="/admin/registerdocentes">Docentes</Link></li>
                    <li><Link to="/admin/registerestudents">Estudiantes</Link></li>
                    <li><Link to="/admin/materias">Materias</Link></li>
                    <li><Link to="/admin/semestres">Semestres</Link></li>
                    <li><Link to="/admin/ambientes">Ambientes</Link></li>
                    <li><Link to="/admin/asignarmaterias">Asignar Materias</Link></li>
                    <li><Link to="/admin/horarios">Horarios</Link></li>
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
            
        </>)
    );
};