import React from 'react'
import "./estilos.css";


export const App = () => {
  return (
    <div>
      <h1 className="titulo">SISTEMA DE AUTENTICACION</h1><br/><br/>
      <img src={/imgauth/usuario.png} /><br></br>
      <center>
        <button className="login" >LOGIN</button><br/><br/>
        <select className="registro">
          <option value="e">REGISTRO DE ESTUDIANTE</option>
          <option value="d">REGISTRO DE DOCENTE</option>
        </select>
      </center>
    </div>
  );
};