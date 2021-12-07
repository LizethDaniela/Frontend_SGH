import React from 'react';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { HeaderMateriaComponent } from './HeaderMateriaComponent';
import { MateriasListComponent } from './MateriasListComponent';
import { ObtenerMateriasComponent } from './ObtenerMateriasComponent';
import { RegisterMateriaComponent } from './RegisterMateriaComponent';
import "./styles.css";

export const ContainerMateriasListComponent = () => {
    return (
        <>
            <Head />
            <DashBoardComponent />
            <div className="container">
                <HeaderMateriaComponent />
                <div className="componentes">
                    <RegisterMateriaComponent />
                    <ObtenerMateriasComponent />
                </div>
                <MateriasListComponent />
            </div>
        </>
    );
};
