import React from 'react';
import { useDispatch } from 'react-redux';
import { listSemestres } from '../../../actions/registerSemestre';

export const HeaderSemestreComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistSemestres = () => {
        dispatch(listSemestres());
    };

    return (
        <div>
            <h3 onClick = { handlerlistSemestres() }> Semestre </h3>
        </div>
    );
};
