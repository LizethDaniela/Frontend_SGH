import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { authLogoutAsync } from '../../actions/auth';
import { useNavigate } from "react-router-dom";

export const DashEstudiante= ({ children, ...rest }) => {
    const history = useNavigate();
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        user == null? (<>{ history("/")}</>): (<>
          
            <div className="sidebar">
                <header>Estudiante</header>
                <ul>
                    <li><Link to="/estudent/verhorarios"> Ver Horarios </Link></li>
                    <li><Link to="/estudent/programaciones">Programar Materias</Link></li>
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
           
        </>)
    );
};
