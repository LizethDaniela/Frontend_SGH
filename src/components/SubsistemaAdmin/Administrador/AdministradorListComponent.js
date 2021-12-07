import React from 'react';
import { useSelector } from 'react-redux';
import { AdministradorItem } from './AdministradorItem';

export const AdministradorListComponent = () => {
    const { auth } = useSelector((state) => state);
    const { data } = auth;
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
                        <th>Username</th>
                        <th>Fecha de nacimiento</th>
                        <th>Teléfono</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { data &&
                        data.map( item => {
                            return <AdministradorItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
