import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { authLogoutAsync } from '../../actions/auth';
import { useNavigate } from "react-router-dom";
import "./dashstyles.css";


export const DashDocente= ({ children, ...rest }) => {
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
                <header>Docente</header>
                <ul>
                    <li><Link to="/docent/verhorariosasignados"> Ver Horarios Asignados</Link></li>
                    <li><Link to="/docent/reajuste">Reajuste de Horarios</Link></li>
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
           
        </>)
    );
};