import React from 'react';
import { useDispatch } from 'react-redux';
import { listDocenteMaterias } from '../../../actions/registerDocente';

export const ObtenerListDocenteMateriaComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistDocenteMaterias = () => {
        dispatch(listDocenteMaterias());
    };

    return (
        
        <button type="button" onClick = {handlerlistDocenteMaterias()}> Asignacion de Materias a Docentes </button>
        
    );
};
