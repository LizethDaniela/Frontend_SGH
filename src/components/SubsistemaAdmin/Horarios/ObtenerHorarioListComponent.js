import React from 'react';
import { useDispatch } from 'react-redux';
import { listHorarios } from '../../../actions/registerHorario';

export const ObtenerHorarioListComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistHorarios = () => {
        dispatch(listHorarios());
    };

    return (
        
        <button type="button" className="link" onClick = { handlerlistHorarios() }> Ver Lista de Horarios </button>
        
    );
};
