import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { authLogoutAsync } from '../../actions/auth';
import Head from '../head/Head';
import "./dashstyles.css";


export const PrincipalDocente= ({ children, ...rest }) => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        user == null? (<Redirect to="/"/>): (<>
            {/* <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <div className="fas fa-bars">
                    <MdCancel className="iconcolor"/>
                </div>
            </label> */}
            <Head/>
            <div className="sidebar">
                <header>Docente</header>
                <ul>
                    <li><Link to="/verhorariosasignados"> Ver Horarios Asignados</Link></li>
                    <li><Link to="/solicitar">Reajuste de Horarios</Link></li>
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
            <div className="container">
                aqui el contenido principal docente
            </div>
           
        </>)
    );
};