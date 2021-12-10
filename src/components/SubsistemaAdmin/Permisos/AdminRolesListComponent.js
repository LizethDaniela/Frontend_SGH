import React from 'react';
import { useSelector } from 'react-redux';
import { AdminRolesItem } from './AdminRolesItem';

export const AdminRolesListComponent = () => {
    const { auth } = useSelector((state) => state);
    const { dataAdminroles } = auth;
    console.log(dataAdminroles);
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
                        <th colSpan="5">ROLES</th>
                    </tr>
                </thead>
                <tbody>
                    { dataAdminroles &&
                        dataAdminroles.map( item => {
                            return <AdminRolesItem key = {item._id} {...item}/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
