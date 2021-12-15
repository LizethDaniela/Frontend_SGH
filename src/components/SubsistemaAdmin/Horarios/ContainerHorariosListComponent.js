import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { RegistrarHorarioComponent } from './RegistrarHorarioComponent';
import { TitleComponent } from './TitleComponent';
import { HeaderDocenteComponent } from './HeaderDocenteComponent';
import { HeadeAmbienteComponent } from './HeadeAmbienteComponent';
import { HeaderSemestreComponent } from './HeaderSemestreComponent';
import { SearchDocenteComponent } from './SearchDocenteComponent';
import { SearchAmbienteComponent } from './SearchAmbienteComponent';
import { SearchSemestreComponent } from './SearchSemestreComponent';
import "./horario.css";

export const ContainerHorariosListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <div className="componentes">
                    <HeaderDocenteComponent />
                    <HeadeAmbienteComponent />
                    <HeaderSemestreComponent />
                </div>
                <div className="componentes">
                    <SearchDocenteComponent />
                    <SearchAmbienteComponent />
                    <SearchSemestreComponent />
                </div>
                <div className="horario">
                    <TitleComponent/>
                    <RegistrarHorarioComponent />
                </div>
            </div>
        </>
    );
};