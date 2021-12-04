import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {Redirect,Link  } from "react-router-dom";
import { authLogoutAsync } from '../../actions/auth';
import {Button} from 'reactstrap';
import { MdLocalPrintshop } from "react-icons/md";
import Head from '../head/Head';

export const VerHorariosAsignados= ({ children, ...rest }) => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    const data = [
        {id:1, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'lunes'},
        {id:2, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'lunes'},
        {id:3, docente:'Juan', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'lunes'},
        {id:1, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'martes'},
        {id:2, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'martes'},
        {id:3, docente:'Juan', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'martes'},
        {id:1, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'miercoles'},
        {id:2, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'miercoles'},
        {id:3, docente:'Juan', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'jueves'},
        {id:1, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'viernes'},
        {id:2, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'sabado'},
        {id:3, docente:'Paola', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'sabado'},
     
    ]
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
              <div className="row">
                <ul className="col-sm-2">
                    <li className="list-group-item active" aria-current="true">LUNES</li>
                    {data.map((item)=>(<>
                    {item.dia==='lunes' && item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                
                <ul className="col-sm-2">
                    <li className="list-group-item active" aria-current="true">MARTES</li>
                    {data.map((item)=>(<>
                    {item.dia==='martes'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                <ul className="col-sm-2">
                    <li className="list-group-item active" aria-current="true">MIERCOLES</li>
                    {data.map((item)=>(<>
                    {item.dia==='miercoles'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                
                <ul className="col-sm-4">
                    <li className="list-group-item active" aria-current="true">JUEVES</li>
                    {data.map((item)=>(<>
                    {item.dia==='jueves'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                <ul className="col-sm-4">
                    <li className="list-group-item active" aria-current="true">VIERNES</li>
                    {data.map((item)=>(<>
                    {item.dia==='viernes'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                <ul className="col-sm-4">
                    <li className="list-group-item active" aria-current="true">SABADO</li>
                    {data.map((item)=>(<>
                    {item.dia==='sabado'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul> 
            </div>
            <Button type="submit" color="success"   >   <MdLocalPrintshop/>  IMPRIMIR</Button>
            
            </div>
                    
        </>)
    );
};