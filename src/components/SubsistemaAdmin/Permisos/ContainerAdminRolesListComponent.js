import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { AdminRolesListComponent } from './AdminRolesListComponent';
import { HeaderPermisoComponet } from './HeaderPermisoComponet';
import { ObtenerListAdminRolesComponent } from './ObtenerListAdminRolesComponent';

export const ContainerAdminRolesListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderPermisoComponet />
                <div className="componentes">
                    <ObtenerListAdminRolesComponent />
                </div>
                <AdminRolesListComponent />
            </div>
        </>
    );
};
