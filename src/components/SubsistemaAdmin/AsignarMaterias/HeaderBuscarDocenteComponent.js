import React from 'react'
import { useDispatch } from 'react-redux';
import { listDocentes } from '../../../actions/registerDocente';

export const HeaderBuscarDocenteComponent = () => {
    const dispatch = useDispatch();

    const handlerlistDocentes = () => {
        dispatch(listDocentes());
    };

    return (
        <div>
            <h3 onClick = { handlerlistDocentes()  }> Buscar Docente </h3>
        </div>
    );
};
