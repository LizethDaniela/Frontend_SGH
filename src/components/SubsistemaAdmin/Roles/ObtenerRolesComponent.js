import React from 'react';
import { useDispatch } from 'react-redux';
import { listRoles } from '../../../actions/registerRol';

export const ObtenerRolesComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistRoles = () => {
        dispatch(listRoles());
    };

    return (
        <>
            <button type="button" onClick = { handlerlistRoles() }> Ver Lista de Roles </button>
        </>
    );
};
