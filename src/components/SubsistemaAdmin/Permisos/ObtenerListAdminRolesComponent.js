import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { listAdminRoles } from '../../../actions/auth';

export const ObtenerListAdminRolesComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistAdminRoles = () => {
        dispatch(listAdminRoles());
    };

    return (
        
        <button type="button" onClick = { handlerlistAdminRoles() }><FaUsers/> Ver Lista de Permisos </button>
        
    );
};
