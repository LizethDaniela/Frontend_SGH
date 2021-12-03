import React from 'react';
import { useSelector } from 'react-redux';
import { StudentItem } from './StudentItem';

export const StudentsListComponent = () => {
    const { student } = useSelector((state) => state);
    const { data } = student;
    console.log(data);
    return (
        <div className="tabla">
            <table className=" table-bordered thead-dark">
                <thead>
                    <tr>
                        <th>C.I.</th>
                        <th>R.U.</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Cargo</th>
                        <th>Semestre</th>
                        <th>e-mail</th>
                        <th>Fecha nacimiento</th>
                        <th>Teléfono</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { data &&
                        data.map( item => {
                            return <StudentItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
