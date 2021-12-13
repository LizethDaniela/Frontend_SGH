import React from 'react';
import { useSelector } from 'react-redux';
import { DocenteMateriasItem } from './DocenteMateriasItem';

export const DocenteMateriasListComponent = () => {
    const { docente } = useSelector((state) => state);
    const { dataDocentematerias } = docente;
    console.log(dataDocentematerias);
    return (
        <div className="tabla">
            <table className=" table-bordered thead-dark">
                <thead>
                    <tr>
                        <th>C.I.</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Cargo</th>
                        <th>ASIGNACION DE MATERIAS</th>
                    </tr>
                </thead>
                <tbody>
                    { dataDocentematerias &&
                        dataDocentematerias.map( item => {
                            return <DocenteMateriasItem key = {item._id} {...item}/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
