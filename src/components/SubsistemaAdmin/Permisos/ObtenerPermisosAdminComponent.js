import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { listAdministradores } from '../../../actions/auth';

export const ObtenerPermisosAdminComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistAdministradores = () => {
        dispatch(listAdministradores());
    };

    return (
        <button type="button" onClick = { handlerlistAdministradores() }><FaUsers/>  Ver Lista de Administradores </button>
    );
};
