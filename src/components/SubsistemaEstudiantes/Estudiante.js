import React from 'react'
import { Redirect,Link } from 'react-router-dom';
import Head from '../head/Head'
import { useDispatch, useSelector } from 'react-redux';
import { authLogoutAsync } from '../../actions/auth';

export const Estudiante = ({ children, ...rest }) => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (user == null? (<Redirect to="/loginest"/>): (<>
            <Head/>
                <div>
                <nav className="navbar">
                    <Link to="/verhorarios" >Ver Horarios</Link>
                    <Link to="/programat" >Programar Materias</Link>
                     <button type="button" className="btn btn-secondary" onClick={handlerLogout}>Cerrar Sesión</button> 
                     
                    
                </nav>
                <div className="container">
                <h3> Pagina Principal Estudiante </h3>
                </div>
                </div>
                
                
                
            </> )
     
    )
}
