import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { HeaderPermisoComponet } from './HeaderPermisoComponet';
import { ObtenerAdminRolesListComponent } from './ObtenerAdminRolesListComponent';
import { ObtenerPermisosAdminComponent } from './ObtenerPermisosAdminComponent';
import { ObtenerPermisosRolComponent } from './ObtenerPermisosRolComponent';
import { PermisosListComponent } from './PermisosListComponent';

export const ContainerPermisosListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderPermisoComponet />
                <div className="componentes">
                    <ObtenerPermisosAdminComponent />
                    <ObtenerPermisosRolComponent />
                    <ObtenerAdminRolesListComponent />
                </div>
                <PermisosListComponent />
            </div>
        </>
    );
};
