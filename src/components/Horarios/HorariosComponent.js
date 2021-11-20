<<<<<<< HEAD
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

import { SearchComponent } from './components/SearchComponent';
import { TitleComponent } from './components/TitleComponent';
import { ContainerHorarioComponent } from './components/ContainerHorarioComponent';
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
       <div className="container">
       
            <div className="horario">
                <TitleComponent/>
               
                <ContainerHorarioComponent/>
                
            </div>
            </div>
        
        </>

      
    )
  
}

=======
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

import React from 'react';
import { BsCalendar3, BsXCircleFill, BsSave2Fill} from "react-icons/bs";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Link
  } from "react-router-dom";
export class HorariosComponent extends React.Component{
  state={
    abierto: false,
  }
  

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }
  cambiarboton=()=>{
    let i=document.getElementById("boton").value = "Mundo";
  }
  render(){

    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
       <div className="container">
        <div className="d-flex justify-content-center h-100">
            <div className="horario">
                
                <div>
                    <h3>Horarios    <BsCalendar3/></h3>
                    <hr/>
                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Semestre</option>
                                    <option value="1">1° Semestre</option>
                                    <option value="2">2° Semestre</option>
                                    <option value="3">3° Semestre</option>
                                    <option value="4">4° Semestre</option>
                                    <option value="5">5° Semestre</option>
                                    <option value="6">6° Semestre</option>
                                    <option value="7">7° Semestre</option>
                                    <option value="8">8° Semestre</option>
                                    <option value="9">9° Semestre</option>

                                </select>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                </div>
                <div className="formato">
                <button >HORARIO</button>
                <button >LUNES</button>
                <button >MARTES</button>
                <button>MIERCOLES</button>
                <button >JUEVES</button>
                <button>VIERNES</button>
                <button >SABADO</button>
                <button >7:45-8:30</button>
                <button id="boton"onClick={this.abrirModal} ></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >8:30-9:15</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >9:45-10:00</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >10:00-10:45</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >10:45-11:30</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >11:30-12:15</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >14:00-14:45</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >14:45-15:30</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >15:30-16:15</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >16:15-17:00</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >17:00-17:45</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button >17:45-18:30</button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                <button onClick={this.abrirModal}></button>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">    
            <Link to="/modificar" ><button type="submit" className="btn-a">MODIFICAR</button></Link>
                </div>
            </div>
        </div>
    </div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Horario
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="materia">Materia</Label>
            <Input type="text" id="materia"/> 
          </FormGroup>
          <FormGroup>
            <Label for="ambiente">Ambiente</Label>
            <Input type="text" id="ambiente"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button type="submit" color="success" onClick={this.cambiarboton}><BsSave2Fill/>     Guardar</Button>
            <Button color="danger" onClick={this.abrirModal}><BsXCircleFill/>    Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

>>>>>>> 85ef2c2849e739921958dcfcca55f437107c7c52
