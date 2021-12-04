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



export const VerHorariosEst= ({ children, ...rest }) => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        user == null? (<Redirect to="/"/>): (<>
          
            <Head/>
            <div className="sidebar">
                <header>Estudiante</header>
                <ul>
                    <li><Link to="/verhorarios"> Ver Horarios </Link></li>
                    <li><Link to="/programat">Programar Materias</Link></li>
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
            <div className="container">
                aqui el contenido para ver los horarios
            </div>
           
        </>)
    );
};