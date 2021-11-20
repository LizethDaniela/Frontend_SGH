import React from 'react'
import "./auten.css";
import {
    Link
  } from "react-router-dom";


export const Autenticacion = () => {
  return (
    <div>
        <h1 className="titulo">SISTEMA DE AUTENTICACION</h1><br/><br/>
        <img src={`/imgauth/usuario.png`} /><br></br>
        <center>
            <Link to="/login" ><button className="login" >LOGIN</button></Link><br/><br/>
        </center>
    </div>
  );
};