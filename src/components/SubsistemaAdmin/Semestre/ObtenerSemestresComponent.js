import React from 'react';
import { useDispatch } from 'react-redux';
import { listSemestres } from '../../../actions/registerSemestre';

export const ObtenerSemestresComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistSemestres = () => {
        dispatch(listSemestres());
    };

    return (
        <>
            <button type="button" onClick = { handlerlistSemestres() }> Ver Lista de Semestres </button>
        </>
    );
};
