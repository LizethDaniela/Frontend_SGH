import React, {useState} from 'react'
import Head from '../head/Head';
import { MdAccountCircle } from "react-icons/md";
import { FaUsers } from 'react-icons/fa';
import { useForm } from '../../hooks/useForm';
import { DashDocente } from './DashDocente';
import './stylos.css';

export const Solicitar=()=>{

  const [form, setForm]=useState({
    nombre: "",
    materia: "",
    hora: "",
    dia: "",
    motivo: ""
  })
  const handlerChangeForm=(e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }
  const enviarSolicitud=(e)=>{
    e.preventDefault();
    console.log(form.nombre+ ' '+form.materia+ ' '+form.dia+ ' '+form.hora);
  };
    return (
        <>
        <Head/>
        <DashDocente/>
            <div className="form-wrapper-solicitar">
                <form onSubmit={enviarSolicitud}>
                  <div className="simple">
                    <label htmlFor="name">NOMBRE:</label>
                      <input
                        placeholder="Escriba aqui"
                        type="text"
                        name="nombre"
                        //value="nombre"
                        onChange={handlerChangeForm}
                      /> <br/>
                  </div>
                  <div className="simple">
                    <label htmlFor="name">MATERIA:</label>
                      <input
                        placeholder="Escriba aqui"
                        type="text"
                        name="materia"
                        //value="nombre"
                        onChange={handlerChangeForm}
                      /> <br/>
                  </div>
                  <div className="simple">
                    <label htmlFor="name">Dia:</label>
                      <input
                        placeholder="Escriba aqui"
                        type="text"
                        name="dia"
                        //value="nombre"
                        onChange={handlerChangeForm}
                      /> <br/>
                  </div>
                  <div className="simple">
                    <label htmlFor="name">HORA:</label>
                      <input
                        placeholder="00:00 - 00:00"
                        type="text"
                        name="hora"
                        //value="nombre"
                        onChange={handlerChangeForm}
                      /> <br/>
                  </div>
                  <div className="simple">
                  <label htmlFor="name">MOTIVO:</label>
                  <textarea 
                    placeholder="Escriba aqui"
                    cols="25"
                    type="text"
                    name="motivo"
                    //value={motivo}
                    onChange={handlerChangeForm}
                    
                  /> <br/>
                  </div>
                  <div className="createAccount">
                      <button type="submit">Enviar</button>
                      
                  </div>
                </form>
            </div>
        </>
    );
};