import React from 'react';
import { useSelector } from 'react-redux';
import { HorarioItem } from './HorarioItem';

export const HorariosListComponent = () => {
    const { horario } = useSelector((state) => state);
    const { data } = horario;
    console.log(data);
    return (
        <div className="tabla">
            <table className=" table-bordered thead-dark">
                <thead>
                    <tr>
                        <th>Semestre</th>
                        <th>Grupo</th>
                        <th>Dia</th>
                        <th>Materia</th>
                        <th>Docente</th>
                        <th>Ambiente</th>
                        <th>Piso</th>
                        <th colSpan="5">DISPONIBILIDAD DE TIEMPO OCUPADA</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    { data &&
                        data.map( item => {
                            return <HorarioItem key = {item._id} {...item} otro = { item }/>;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
