import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MdLockOpen } from "react-icons/md";
import { Route, Switch, Redirect, Link} from "react-router-dom";
import { LogoutStudent} from '../../actions/logEstudent';
import { Navigate } from "react-router-dom";

export const DashEstudiante= () => {
    
    const { logStudent }=useSelector(state=> state);
    const { displayName }=logStudent;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(LogoutStudent())};
    return (
        displayName==null?(<Navigate to="/"/>):(<>
            <div className="sidebar">
            <header>Docente</header>
            <ul>
                <li><Link to="/estudent/programaciones"> Programar Materias</Link></li>
                <li><Link to="/estudent/verhorarios">Ver Horario</Link></li>
                <li ><a href="#" onClick={handlerLogout}> <MdLockOpen /> Logout</a></li>
            </ul>
        </div>
            {/*<Switch>
                <Route path="/dashboard"/>
            </Switch>*/}
        </>)
        
    );
};
