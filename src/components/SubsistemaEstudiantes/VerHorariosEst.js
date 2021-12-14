import React from 'react'
import {Button} from 'reactstrap';
import { MdLocalPrintshop } from "react-icons/md";
import Head from '../head/Head';
import { DashEstudiante } from './DashEstudiante';

export const VerHorariosEst= () => {
    
    const data = [
        {id:1, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'lunes'},
        {id:2, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'lunes'},
        {id:3, docente:'Juan', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'lunes'},
        {id:4, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'martes'},
        {id:5, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'martes'},
        {id:6, docente:'Juan', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'martes'},
        {id:7, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'miercoles'},
        {id:8, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'miercoles'},
        {id:9, docente:'Juan', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'jueves'},
        {id:10, docente:'Juan', materia:'PROGRAMACIÓN 1', ambiente:'Amb2Piso1',periodo:'07:45-08:30',dia:'viernes'},
        {id:11, docente:'Juan', materia:'PROGRAMACION 2', ambiente:'Amb2Piso2',periodo:'07:45-08:30', dia:'sabado'},
        {id:12, docente:'Paola', materia:'ESTRUCTURA DE DATOS',ambiente:'Amb7Piso3',periodo:'07:45-08:30',dia:'sabado'},
    
    ]
    return (
        <>
            <Head/>
            <DashEstudiante/>
            <div className="container">
            <div className="asig">
                <div className="row">
                    <ul className="col-sm-3">
                        <li className="list-group-item active" aria-current="true">LUNES</li>
                        {data.map((item)=>(<>
                        {item.dia==='lunes' && item.docente==='Juan'?(<>
                        <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                        </>):(<></>)} 
                        </> ))} 
                </ul>
                
                <ul className="col-sm-3">
                    <li className="list-group-item active" aria-current="true">MARTES</li>
                    {data.map((item)=>(<>
                    {item.dia==='martes'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                <ul className="col-sm-3">
                    <li className="list-group-item active" aria-current="true">MIERCOLES</li>
                    {data.map((item)=>(<>
                    {item.dia==='miercoles'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                <hr/>
                <ul className="col-sm-3">
                    <li className="list-group-item active" aria-current="true">JUEVES</li>
                    {data.map((item)=>(<>
                    {item.dia==='jueves'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                <ul className="col-sm-3">
                    <li className="list-group-item active" aria-current="true">VIERNES</li>
                    {data.map((item)=>(<>
                    {item.dia==='viernes'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul>
                <ul className="col-sm-3">
                    <li className="list-group-item active" aria-current="true">SABADO</li>
                    {data.map((item)=>(<>
                    {item.dia==='sabado'&& item.docente==='Juan'?(<>
                    <li className="list-group-item">{item.ambiente} {item.materia} {item.periodo}</li>
                    </>):(<></>)} 
                    </> ))} 
                </ul> 
            </div>
            {/*<Button type="submit" color="success"   >   <MdLocalPrintshop/>  IMPRIMIR</Button>*/}
            
            </div>
        </div>         
    </>
    );
};