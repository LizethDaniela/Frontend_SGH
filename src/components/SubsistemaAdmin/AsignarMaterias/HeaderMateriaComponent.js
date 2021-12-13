import React from 'react';
import { useDispatch } from 'react-redux';
import { listMaterias } from '../../../actions/registerMateria';

export const HeaderMateriaComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistMaterias = () => {
        dispatch(listMaterias());
    };

    return (
        <div>
            <h3 onClick = { handlerlistMaterias() }> Materias </h3>
        </div>
    );
};
