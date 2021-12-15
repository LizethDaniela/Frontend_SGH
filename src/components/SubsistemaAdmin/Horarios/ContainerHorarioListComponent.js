import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { HeaderHorarioComponent } from './HeaderHorarioComponent';
import { HorariosListComponent } from './HorariosListComponent';
import { ObtenerHorarioListComponent } from './ObtenerHorarioListComponent';

export const ContainerHorarioListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderHorarioComponent />
                <ObtenerHorarioListComponent />
                <HorariosListComponent />
            </div>
        </>
    );
};
