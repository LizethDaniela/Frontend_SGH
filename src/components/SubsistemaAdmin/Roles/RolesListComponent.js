import React from 'react';
import { useSelector } from 'react-redux';
import { RolItem } from './RolItem';

export const RolesListComponent = () => {
    const { rol } = useSelector((state) => state);
    const { dataRoles } = rol;
    console.log(dataRoles);
    return (
        <div className="tabla">
            <table className=" table-bordered thead-dark">
                <thead>
                    <tr>
                        <th>ROL</th>
                        <th>METODO</th>
                        <th>URL</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { dataRoles &&
                        dataRoles.map( item => {
                            return <RolItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
