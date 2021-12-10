import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PermisoAdminItem } from './PermisoAdminItem';
import { PermisoRolItem } from './PermisoRolItem';
import "./styles.css";

export const PermisosListComponent = () => {
    const { auth, rol } = useSelector((state) => state);
    const { data } = auth;
    const { dataRoles } = rol;
    console.log(data);
    console.log(dataRoles);

    const [administrador, setAdministrador] = useState("");
    const adminR = (obtener_admin) => {
        setAdministrador(obtener_admin);
    };

    return (
        <>
            <div className="adminrol">
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
                                    return <PermisoAdminItem admin={adminR} 
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
                <div className="tabla">
                    <table className=" table-bordered thead-dark">
                        <thead>
                            <th>Rol</th>
                            <th>Añadir Rol</th>
                        </thead>
                        <tbody>
                            { dataRoles &&
                                dataRoles.map( item => {
                                    return <PermisoRolItem datoAdmin={administrador}
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
            </div>
        </>
    );
};
