import React from 'react';
import { useDispatch } from 'react-redux';
import { listSemestres } from '../../../actions/registerSemestre';

export const HeaderSemestreComponent = () => {
    const dispatch = useDispatch();

    const handlerlistSemestres = () => {
        dispatch(listSemestres());
    };

    return (
        <div className="sem">
            <h3 onClick = { handlerlistSemestres() }> Semestres </h3>
            <hr/>
        </div>
    );
};
