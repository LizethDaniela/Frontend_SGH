import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { HeaderRolComponent } from './HeaderRolComponent';
import { ObtenerRolesComponent } from './ObtenerRolesComponent';
import { RegisterRolComponent } from './RegisterRolComponent';
import { RolesListComponent } from './RolesListComponent';

export const ContainerRolesListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderRolComponent />
                <div className="componentes">
                    <RegisterRolComponent />
                    <ObtenerRolesComponent />
                </div>
                <RolesListComponent />
            </div>
        </>
    );
};
