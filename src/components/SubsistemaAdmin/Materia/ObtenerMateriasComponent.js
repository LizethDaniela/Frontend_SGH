import React from 'react';
import { useDispatch } from 'react-redux';
import { listMaterias } from '../../../actions/registerMateria';

export const ObtenerMateriasComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistMaterias = () => {
        dispatch(listMaterias());
    };

    return (
        <>
            <button type="button" onClick = { handlerlistMaterias() }> Ver Lista de Materias </button>
        </>
    );
};
