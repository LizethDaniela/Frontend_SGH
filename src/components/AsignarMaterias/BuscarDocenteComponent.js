import React from 'react'

export const BuscarDocenteComponent = () => {
    return (
        <div className="card-header">
            <form className="d-grid gap-2 d-md-flex justify-content-md-end">
                <input type="search" placeholder="Nombre Docente"/>
                <button type="submit" className="btn btn-light">Buscar</button>
            </form>
        </div>
    );
};
