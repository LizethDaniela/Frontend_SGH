import React from 'react'
import {Button} from 'reactstrap';
import { MdLocalPrintshop } from "react-icons/md";
import { DashboardDocente } from './DashboardDocente';
export const VerHorarios = () => {
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
        
        <div className="container">
           
        <select class="form-select" size="3" aria-label="size 3 select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
        </div>
    
</>
    )
}

{/*}) : (<>username==="Pepito"?(<Redirect to="/Dashboard"/>):(<>
        {username==="Luis"?(<Redirect to="/DashboardDocente"/>):(<></>)}
</>)*/}