import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { listAdministradores } from '../../../actions/auth';

export const ObtenerAdministradorList = () => {
    const dispatch = useDispatch();
    
    const handlerlistAdministradores = () => {
        dispatch(listAdministradores());
    };

    return (
        
        <button type="button" className="link" onClick = { handlerlistAdministradores() }><FaUsers/>  Ver Lista de Administradores </button>
        
    );
};
