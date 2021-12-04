import React from 'react'
import {Button} from 'reactstrap';
import { MdLocalPrintshop } from "react-icons/md";
import { Link } from 'react-router-dom';
import Head from '../head/Head';
import './NavBarDoc.css';
import { FaHome,FaUserClock } from "react-icons/fa";

export const VerHorariosAsignados = () => {
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
    return (<>
       <Head/>
       <div>
       <nav className="navbar">
          <Link to="/principaldoc" > <h4><FaHome/></h4></Link>
          <Link to="/horariosasig" >Horarios Asignados</Link>
          <Link to="/ajustes" >Reajuste de horarios</Link>
          <button type="button" className="btn btn-secondary">Cerrar Sesión</button>  
       </nav>
        <div className="container">
        <h3> <FaUserClock/>  Horarios Asignados </h3>
       
        <div className="row">
       
        
            <ul className="col-sm-4">
                <li className="list-group-item active" aria-current="true">LUNES</li>
                {data.map((item)=>(<>
                {item.dia==='lunes' && item.docente==='Juan'?(<>
                <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                </>):(<></>)} 
                </> ))} 
            </ul>
            <ul className="col-sm-4">
                <li className="list-group-item active" aria-current="true">MARTES</li>
                {data.map((item)=>(<>
                {item.dia==='martes'&& item.docente==='Juan'?(<>
                <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                </>):(<></>)} 
                </> ))} 
            </ul>
            <ul className="col-sm-4">
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
    </div>
</>
    )
}

{/*}) : (<>username==="Pepito"?(<Redirect to="/Dashboard"/>):(<>
        {username==="Luis"?(<Redirect to="/DashboardDocente"/>):(<></>)}
</>)*/}