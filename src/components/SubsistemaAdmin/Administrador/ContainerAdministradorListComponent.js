import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { AdministradorListComponent } from './AdministradorListComponent';
import { HeaderAdministradorComponent } from './HeaderAdministradorComponent';
import { ObtenerAdministradorList } from './ObtenerAdministradorList';

export const ContainerAdministradorListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderAdministradorComponent />
                <ObtenerAdministradorList />
                <AdministradorListComponent />
            </div>
        </>
    );
};
