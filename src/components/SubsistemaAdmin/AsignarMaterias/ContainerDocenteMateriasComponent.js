import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { DocenteMateriasListComponent } from './DocenteMateriasListComponent';
import { HeaderDocenteMateriaComponent } from './HeaderDocenteMateriaComponent';
import { ObtenerListDocenteMateriaComponent } from './ObtenerListDocenteMateriaComponent';

export const ContainerDocenteMateriasComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderDocenteMateriaComponent />
                <div className="componentes">
                    <ObtenerListDocenteMateriaComponent />
                </div>
                <DocenteMateriasListComponent />
            </div>
        </>
    );
};
