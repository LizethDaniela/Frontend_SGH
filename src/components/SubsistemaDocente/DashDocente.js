import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MdLockOpen } from "react-icons/md";
import { Route, Switch, Redirect, Link} from "react-router-dom";
import { LogoutDocent } from '../../actions/logDocent';
import { Navigate } from "react-router-dom";

import "./dashstyles.css";

export const DashDocente = () => {
    
    const {logDocent}=useSelector(state=> state);
   // const {user} = auth;
    const { displayName }=logDocent;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(LogoutDocent());
    };
    return (
        displayName==null?(<Navigate to="/"/>):(<>
            <div className="sidebar">
            <header>Docente</header>
            <ul>
                <li><Link to="/docent/verhorariosasignados"> Ver Horarios Asignados</Link></li>
                <li><Link to="/docent/reajuste">Reajuste de Horarios</Link></li>
                <li ><a href="#" onClick={handlerLogout}> <MdLockOpen /> Logout</a></li>
            </ul>
        </div>
            {/*<Switch>
                <Route path="/dashboard"/>
            </Switch>*/}
        </>)
        
    )
}
