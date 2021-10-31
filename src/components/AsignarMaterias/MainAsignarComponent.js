import React from 'react'
import { BuscarDocenteComponent } from './BuscarDocenteComponent';
import { ContainerSemestreComponent } from './ContainerSemestreComponent';
import { AsignarMateriasComponent } from './AsignarMateriasComponent';
import "./styles.css";

export const MainAsignarComponent = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="materia">
                    <BuscarDocenteComponent />
                    <ContainerSemestreComponent />
                    <AsignarMateriasComponent />
                </div>
            </div>
        </div>
    );
};
