import React from 'react'
import './botones.css'
import {
    Link
  } from "react-router-dom";

export const Botones = () => {
    return (
        <div>
            <Link to="/materiacarga/crearmateria"><button className="crear">CREAR</button></Link>
            <Link to="/materiacarga/editarmateria"><button className="editar">EDITAR</button></Link>
            <button className="eliminar">ELIMINAR</button>
        </div>
    )
}
