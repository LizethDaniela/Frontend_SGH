import React from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
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
import { ObtenerHorariosListComponent } from './ObtenerHorariosListComponent';
import "./horario.css";

export const ContainerHorariosListComponent = () => {
    const mensaje = "Debe buscar primero un docente, ambiente y semestre para poder registrar horario con esos datos ";
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
                <div className="mensaje"><BsFillExclamationTriangleFill/>{' '}{mensaje}</div>
                <div className="horariolist">
                    <ObtenerHorariosListComponent />
                </div>
                <div className="horario">
                    <TitleComponent/>
                    <RegistrarHorarioComponent />
                </div>
            </div>
        </>
    );
};