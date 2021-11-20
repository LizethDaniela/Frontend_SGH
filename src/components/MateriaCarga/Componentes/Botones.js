<<<<<<< HEAD
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
=======
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
>>>>>>> 85ef2c2849e739921958dcfcca55f437107c7c52
