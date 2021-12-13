import React from 'react'

import Head from '../head/Head';
import { DashEstudiante } from './DashEstudiante';
import './stylos.css';




export const VerHorariosEst= () => {
    return (
        <>
        <Head/>
        <DashEstudiante/>
        <div className="container">
            <table className="tabla">
                <thead className="head">
                    <td>HORA</td>
                    <td>LUNES</td>
                    <td>MARTES</td>
                    <td>MIERCOLES</td>
                    <td>JUEVES</td>
                    <td>VIERNES</td>
                </thead>
                <tbody>
                <tr>
                    <td>7:45-10:00</td>
                    <td>Tecnicas de Programacion I Amb3Piso1</td>
                    <td>Computacion Basica Amb5Piso2</td>
                    <td></td>
                    <td></td>
                    <td>Estadistica I Amb7Piso2</td>
                </tr>
                <tr>
                    <td>10:00-12:15</td>
                    <td>Ingles Tecnico Amb5Piso2</td>
                    <td>Calculo I Amb6Piso3</td>
                    <td></td>
                    <td>Tecnicas de Programacion I Amb3Piso1</td>
                    <td></td>
                </tr>
                <tr>
                    <td>12:15-14:00</td>
                    <td>RECESO</td>
                    <td>RECESO</td>
                    <td>RECESO</td>
                    <td>RECESO</td>
                    <td>RECESO</td>
                </tr>
                <tr>
                    <td>14:00-16:15</td>
                    <td>Estadistica I Amb7Piso2</td>
                    <td>Algebra Amb3Piso2</td>
                    <td></td>
                    <td></td>
                    <td>Ingles Tecnico Amb5Piso2</td>
                </tr>
                <tr>
                    <td>16:15-18:30</td>
                    <td>Algebra Amb3Piso2</td>
                    <td></td>
                    <td>Calculo I Amb6Piso3</td>
                    <td></td>
                    <td>Computacion Basica Amb5Piso2</td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
    );
};