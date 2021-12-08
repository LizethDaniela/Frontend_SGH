import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { HeaderSemestreComponent } from './HeaderSemestreComponent';
import { ObtenerSemestresComponent } from './ObtenerSemestresComponent';
import { RegisterSemestreComponent } from './RegisterSemestreComponent';
import { SemestresListComponent } from './SemestresListComponent';

export const ContainerSemestresListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderSemestreComponent />
                <div className="componentes">
                    <RegisterSemestreComponent />
                    <ObtenerSemestresComponent />
                </div>
                <SemestresListComponent />
            </div>
        </>
    );
};
