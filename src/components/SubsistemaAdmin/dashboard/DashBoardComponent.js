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
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        user == null? (<Redirect to="/Login"/>): (<>
            {/* <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <div className="fas fa-bars">
                    <MdCancel className="iconcolor"/>
                </div>
            </label> */}
            <div className="sidebar">
                <header> Administrador</header>
                <ul>
                    <li><Link to="/registerdocentes">Docentes</Link></li>
                    <li><Link to="/registerestudents">Estudiantes</Link></li>
                    <li><Link to="/materiacarga">Materias</Link></li>
                    <li><Link to="/asignarmaterias">Asignar Materias</Link></li>
                    <li><Link to="/ambientes">Ambientes</Link></li>
                    <li><Link to="/horarios">Horarios</Link></li>
                  
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
            
        </>)
    );
};