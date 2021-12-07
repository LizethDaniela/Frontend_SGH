import React from 'react';
import { useSelector } from 'react-redux';
import { MateriaItem } from './MateriaItem';

export const MateriasListComponent = () => {
    const { materia } = useSelector((state) => state);
    const { data } = materia;
    console.log(data);
    return (
        <div className="tabla">
            <table className=" table-bordered thead-dark">
                <thead>
                    <tr>
                        <th>MATERIA</th>
                        <th>SIGLA</th>
                        <th>NIVEL ACADEMICO</th>
                        <th>CARGA HORARIA SEMANAL</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { data &&
                        data.map( item => {
                            return <MateriaItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
