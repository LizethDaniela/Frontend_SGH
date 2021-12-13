import React from 'react';
import { useSelector } from 'react-redux';
import { PermisoAdminItem } from './PermisoAdminItem';

export const PermisosAdminListComponent = () => {
    const { auth } = useSelector((state) => state);
    const { data } = auth;

    return (
        <>
            <div className="tabla">
                <table className=" table-bordered thead-dark">
                    <thead>
                        <tr>
                            <th>Administrador</th>
                            <th>Seleccionar</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data &&
                            data.map( item => {
                                return <PermisoAdminItem 
                                    key = {item._id} 
                                    idAdmin = {item._id} 
                                    nombreAdmin = { item.nombre } 
                                    apaternoAdmin = { item.ap_paterno } 
                                    amaternoAdmin = { item.ap_materno }
                                />;
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};
