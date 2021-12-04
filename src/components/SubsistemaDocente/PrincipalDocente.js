import React from 'react';
import { Redirect,Link } from 'react-router-dom';
import Head from '../head/Head';
import { useDispatch, useSelector } from 'react-redux';
import { authLogoutAsync } from '../../actions/auth';

import './NavBarDoc.css';
export const PrincipalDocente = ({ children, ...rest }) => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
  return (
    user == null? (<Redirect to="/logdocent"/>): (<>
   <Head/>
     <div>
       <nav className="navbar">
            <Link to="/horariosasig" >Horarios Asignados</Link>
             <Link to="/ajustes" >Reajuste de horarios</Link>
             <button type="button" className="btn btn-secondary" onClick={handlerLogout}>Cerrar Sesión</button> 
       {/*<Link to="/loginest" ><button type="button" className="log"><FaGraduationCap/> Estudiantes</button></Link> 
       <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>*/}

       </nav>
       <div className="container">
       <h3> Pagina Principal Docente </h3>
       </div>
      </div>
      
     
     
  </> )
  );
};

