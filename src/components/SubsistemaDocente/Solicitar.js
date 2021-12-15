import React, {useState} from 'react'
import Head from '../head/Head';
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
    setForm({...form, [e.target.name]:e.target.value});
    console.log(form);
  };
  const enviarSolicitud=(e)=>{
    e.preventDefault();
    console.log(form.nombre+ ' '+form.materia+ ' '+form.dia+ ' '+form.hora);
    setForm("");
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
                        value={form.nombre}
                        onChange={handlerChangeForm}
                      /> <br/>
                  </div>
                  <div className="simple">
                    <label htmlFor="name">MATERIA:</label>
                      <input
                        placeholder="Escriba aqui"
                        type="text"
                        name="materia"
                        value={form.materia}
                        onChange={handlerChangeForm}
                      /> <br/>
                  </div>
                  <div className="simple">
                    <label htmlFor="name">Dia:</label>
                      <input
                        placeholder="Escriba aqui"
                        type="text"
                        name="dia"
                        value={form.dia}
                        onChange={handlerChangeForm}
                      /> <br/>
                  </div>
                  <div className="simple">
                    <label htmlFor="name">HORA:</label>
                      <input
                        placeholder="00:00 - 00:00"
                        type="text"
                        name="hora"
                        value={form.hora}
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
                    value={form.motivo}
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