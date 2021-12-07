import React from 'react';
import { useDispatch } from 'react-redux';
import { listAmbientes } from '../../../actions/registerAmbiente';

export const ObtenerAmbientesComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistAmbientes = () => {
        dispatch(listAmbientes());
    };

    return (
        <>
            <button type="button" onClick = { handlerlistAmbientes() }> Ver Lista de Ambientes </button>
        </>
    );
};
