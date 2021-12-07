import React from 'react';
import { useSelector } from 'react-redux';
import { AmbienteItem } from './AmbienteItem';

export const AmbientesListComponent = () => {
    const { ambientefisico } = useSelector((state) => state);
    const { data } = ambientefisico;
    console.log(data);
    return (
        <div className="tabla">
            <table className=" table-bordered thead-dark">
                <thead>
                    <tr>
                        <th>AMBIENTE</th>
                        <th>PISO</th>
                        <th>CAPACIDAD DE PERSONAS</th>
                        <th>MODALIDAD DE CLASE</th>
                        <th>LINK DE LA CLASE</th>
                        <th>DISPONIBILIDAD DE TIEMPO</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { data &&
                        data.map( item => {
                            return <AmbienteItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
