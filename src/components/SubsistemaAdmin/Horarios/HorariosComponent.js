/*import React from 'react'
import { MdCancel, MdLockOpen } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { authLogoutAsync } from '../../actions/auth';
  
export const HorariosComponent = () => {
    const {auth} = useSelector(state => state);
    const {user} = auth;
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(authLogoutAsync());
    };
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100"></div>
        user == null? (<Redirect to="/Login"/>): (<>
            {/* <input type="checkbox" id="check"/>
            <label htmlFor="check">
                <div className="fas fa-bars">
                    <MdCancel className="iconcolor"/>
                </div>
            </label> }
            
        
            <div className="sidebar">
                <header>Inicio</header>
                <ul>
                    <li><Link to="/registerdocentes">Registrar Docentes</Link></li>
                    <li><Link to="/registerestudents">Registrar Estudiantes</Link></li>
                    <li><Link to="/asignarmaterias">Asignar Materias</Link></li>
                    <li><Link to="/horarios">Horarios</Link></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Events</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>About</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Services</a></li>
                    <li onClick={handlerLogout}><a href="#"> <MdLockOpen /> Logout</a></li>
                </ul>
            </div>
         
         </>)  
    )
}*/

import React, { useState } from 'react';
import { BsCalendar3, BsXCircleFill, BsSave2Fill} from "react-icons/bs";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import "./horario.css";

import { SearchComponent } from '../Horarios/components/SearchComponent';
import { TitleComponent } from '../Horarios/components/TitleComponent';
import { ContainerHorarioComponent } from '../Horarios/components/ContainerHorarioComponent';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';

export const HorariosComponent=(props)=> {
  /*const data = [
    {id:1, materia:'Fisica 1', ambiente:'Amb 2 piso2', hora_i:'07:45', hora_f:'08:30'},
    {id:2, materia:'Tecnicas', ambiente:'Amb 7 piso3', hora_i:'78923612', hora_f:'user'}, 
  ]
  const [dates, setDates]=useState(data);
  const [insert, setInsert]=useState(false);
  const [delet, setDelet]=useState(false);
  const [update, setUpdate]=useState(false);
  const [datosS, setDatosS]=useState({
    id:'',
    materia:'',
    ambiente:'',
    hora_i:'',
    hora_f:'',
  })
  const [form, setForm, handlerChangeForm] = useForm({
    id:'',
    materia:'',
    ambiente:'',
    hora_i:'',
    hora_f:'',

});
  const select=(item, caso)=>{
    setDatosS(item);
    (caso==='Editar')?setUpdate(true):
    setDelet(true)
}
const handleChange=(e)=>{
  const {name, value}=e.target;
  setDatosS((prevState)=>({
      ...prevState,
      [name]:value
  }));
  console.log(datosS);
}
const insertar=()=>{
  let valorInsertar=datosS;
  valorInsertar.id=dates[dates.length-1].id+1;
  let newDate=dates;
  newDate.push(valorInsertar);
  setDates(newDate);
  setInsert(false);
}*/


    return(
      <>
      <Head/>
      <DashBoardComponent/>
       <div className="container">
       
            <div className="horario">
                <TitleComponent/>
               
                <ContainerHorarioComponent/>
                
            </div>
            </div>
        
        </>

      
    )
  
}
