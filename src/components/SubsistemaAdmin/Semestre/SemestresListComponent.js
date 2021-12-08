import React from 'react';
import { useSelector } from 'react-redux';
import { SemestreItem } from './SemestreItem';

export const SemestresListComponent = () => {
    const { sem } = useSelector((state) => state);
    const { data } = sem;
    console.log(data);
    return (
        <div className="tabla">
            <table className=" table-bordered thead-dark">
                <thead>
                    <tr>
                        <th>SEMESTRE</th>
                        <th>GRUPO</th>
                        <th>GESTION</th>
                        <th>NIVEL ACADEMICO</th>
                        <th colSpan="5">DISPONIBILIDAD DE TIEMPO</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { data &&
                        data.map( item => {
                            return <SemestreItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
