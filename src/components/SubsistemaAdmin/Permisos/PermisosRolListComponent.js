import React from 'react';
import { useSelector } from 'react-redux';
import { PermisoRolItem } from './PermisoRolItem';

export const PermisosRolListComponent = () => {
    const { rol } = useSelector((state) => state);
    const { dataRoles } = rol;
    console.log(dataRoles);

    return (
        <>
            <div className="tabla">
                <table className=" table-bordered thead-dark">
                    <thead>
                        <tr>
                            <th>Rol</th>
                            <th>Añadir Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataRoles &&
                            dataRoles.map( item => {
                                return <PermisoRolItem 
                                    key = {item._id} 
                                    idRol = { item._id } 
                                    nameRol = { item.name } 
                                    methodRol = { item.method }
                                />;
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};
