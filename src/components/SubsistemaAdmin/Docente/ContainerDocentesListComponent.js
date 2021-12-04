import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { DocentesListComponent } from './DocentesListComponent';
import { HeaderDocenteComponent } from './HeaderDocenteComponent';
import { ObtenerDocentesList } from './ObtenerDocentesList';

export const ContainerDocentesListComponent = () => {
    return (
        <>
            <Head/>
            <DashBoardComponent/>
            <div className="container">
                <HeaderDocenteComponent />
                <ObtenerDocentesList />
                <DocentesListComponent />
            </div>
        </>
    );
};
