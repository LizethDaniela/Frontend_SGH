import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { AmbientesListComponent } from './AmbientesListComponent';
import { HeaderAmbienteComponent } from './HeaderAmbienteComponent';
import { ObtenerAmbientesComponent } from './ObtenerAmbientesComponent';
import { RegisterAmbienteComponent } from './RegisterAmbienteComponent';

export const ContainerAmbientesListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderAmbienteComponent />
                <div className="componentes">
                    <RegisterAmbienteComponent />
                    <ObtenerAmbientesComponent />
                </div>
                <AmbientesListComponent />
            </div>
        </>
    );
};
