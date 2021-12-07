import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { authLogoutAsync } from '../../../actions/auth';
import "./styles.css"

export const DashBoardComponent = ({ children, ...rest }) => {
    const { auth } = useSelector(state => state);
    const { token } = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        token == null? (<Redirect to="/"/>): (<>
            {/* <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <div className="fas fa-bars">
                    <MdCancel className="iconcolor"/>
                </div>
            </label> */}
            <div className="sidebar">
                <header> Administrador </header>
                <ul>
                    <li><Link to="/administrador/registeradmin">Administrador</Link></li>
                    <li><Link to="/docentes/registerdocentes">Docentes</Link></li>
                    <li><Link to="/students/registerstudents">Estudiantes</Link></li>
                    <li><Link to="/materias">Materias</Link></li>
                    <li><Link to="/ambientes">Ambientes</Link></li>
                    <li><Link to="/asignarmaterias">Asignar Materias</Link></li>
                    <li><Link to="/horarios">Horarios</Link></li>
                
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
            
        </>)
    );
};