import React from 'react';
import { useSelector } from 'react-redux';
import { DocenteItem } from './DocenteItem';

export const DocentesListComponent = () => {
    const { docente } = useSelector((state) => state);
    const { data } = docente;
    console.log(data);
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
                        <th>E-mail</th>
                        <th>Fecha de nacimiento</th>
                        <th>Teléfono</th>
                        <th>Carga horaria</th>
                        <th colSpan="5">DISPONIBILIDAD DE TIEMPO</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { data &&
                        data.map( item => {
                            return <DocenteItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
