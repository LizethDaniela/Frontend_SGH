import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const ObtenerAdminRolesListComponent = () => {
    return (
        <Link to="/admin/permisos/listpermisos"><button tipo="button"><FaUsers/> Lista de Permisos </button></Link>
    );
};
