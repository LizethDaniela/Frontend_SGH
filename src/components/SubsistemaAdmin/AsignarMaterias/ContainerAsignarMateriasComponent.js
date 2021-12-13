import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { HeaderSemestreComponent } from './HeaderSemestreComponent';
import { BuscarDocenteComponent } from './BuscarDocenteComponent';
import { HeaderMateriaComponent } from './HeaderMateriaComponent';
import { MateriasListComponent } from './MateriasListComponent';
import { SemestresListComponent } from './SemestresListComponent';
import "./stylesAM.css";
import { HeaderBuscarDocenteComponent } from './HeaderBuscarDocenteComponent';

export const ContainerAsignarMateriasComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="materiasemestre">
                        <div className="materia">
                            <HeaderBuscarDocenteComponent />
                            <BuscarDocenteComponent />
                            <HeaderMateriaComponent />
                            <MateriasListComponent />
                        </div>
                        <div className="semestre">
                            <HeaderSemestreComponent />
                            <SemestresListComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
