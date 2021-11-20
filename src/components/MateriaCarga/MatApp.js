import React from 'react'
import { Formulario } from './Componentes/Formulario'
import './Componentes/formulario.css'
import { Botones } from './Componentes/Botones'

export const MatApp = () => {
    return (
        <div>
            <h1 className="titulo">CONTROL DE MATERIAS</h1>
            <Formulario /><br></br>
            <Botones />
        </div>
    )
}