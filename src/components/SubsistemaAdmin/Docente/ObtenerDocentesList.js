import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { listDocentes } from '../../../actions/registerDocente';

export const ObtenerDocentesList = () => {
    const dispatch = useDispatch();
    
    const handlerlistDocentes = () => {
        dispatch(listDocentes());
    };

    return (
        
        <button type="button" className="link" onClick = { handlerlistDocentes() }><FaUsers/>  Ver Lista de Docentes </button>
        
    );
};
