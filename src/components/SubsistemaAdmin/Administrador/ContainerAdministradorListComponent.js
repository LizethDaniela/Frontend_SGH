import React from 'react';
import { Outlet } from 'react-router';
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
            <Outlet/>
            <div className="container">
                <HeaderAdministradorComponent />
                <ObtenerAdministradorList />
                <AdministradorListComponent />
            </div>
        </>
    );
};
