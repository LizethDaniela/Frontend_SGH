import React from 'react';
import { Link } from 'react-router-dom';

export const ObtenerListDocenteMateriasComponent = () => {
    return (
        <Link to="/admin/asignarmaterias/listdocentematerias">
            <button tipo="button" className="btn btn-secondary btn-lg disabled" aria-disabled="true"> Ver Asignacion </button>
        </Link>
    );
};
