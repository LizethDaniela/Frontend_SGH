import React from 'react';
import { Link } from 'react-router-dom';

export const ObtenerHorariosListComponent = () => {
    return (
        <>
            <Link to="/admin/horarios/listhorarios"><button tipo="button" className="btn btn-secondary btn-lg disabled"> Lista de Horarios </button></Link>
        </>
    );
};
