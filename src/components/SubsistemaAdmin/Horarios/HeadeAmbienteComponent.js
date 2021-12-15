import React from 'react';
import { useDispatch } from 'react-redux';
import { listAmbientes } from '../../../actions/registerAmbiente';

export const HeadeAmbienteComponent = () => {
    const dispatch = useDispatch();
    
    const handlerlistAmbientes = () => {
        dispatch(listAmbientes());
    };

    return (
        <div>
            <h3 onClick = { handlerlistAmbientes() }> Ambiente </h3>
        </div>
    );
};
