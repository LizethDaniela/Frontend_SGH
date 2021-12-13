import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { BuscarDocenteComponent } from './BuscarDocenteComponent';
import { HeaderMateriaComponent } from './HeaderMateriaComponent';
import { MateriasListComponent } from './MateriasListComponent';
import { HeaderBuscarDocenteComponent } from './HeaderBuscarDocenteComponent';
import { ObtenerListDocenteMateriasComponent } from './ObtenerListDocenteMateriasComponent';
import "./stylesAM.css";

export const ContainerAsignarMateriasComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="materiaslistamaterias">
                        <div className="materia">
                            <HeaderBuscarDocenteComponent />
                            <BuscarDocenteComponent />
                            <HeaderMateriaComponent />
                            <MateriasListComponent />
                        </div>
                        <div className="listamaterias">
                            <ObtenerListDocenteMateriasComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
