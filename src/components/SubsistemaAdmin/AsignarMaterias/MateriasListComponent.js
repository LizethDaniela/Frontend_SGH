import React from 'react';
import { useSelector } from 'react-redux';
import { MateriaItem } from './MateriaItem';

export const MateriasListComponent = () => {
    const { materia } = useSelector((state) => state);
    const { data } = materia;
    console.log(data);
    return (
        <div className="asignar">
            { data &&
                data.map( item => {
                    return <MateriaItem key = {item._id} {...item} />;
                })
            }
        </div>
    );
};
