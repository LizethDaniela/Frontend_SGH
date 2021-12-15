import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerAmbiente } from '../../../actions/registerAmbiente';

export const SearchAmbienteComponent = () => {
    const dispatch = useDispatch();
    const { ambientefisico } = useSelector((state) => state);
    const { data } = ambientefisico;
    console.log(data);

    const { obtener_ambiente } = ambientefisico;
    console.log(obtener_ambiente);

    const [ datobuscar, setDatobuscar ] = useState({
        ambientepiso: ""
    });

    const { ambientepiso } = datobuscar;

    const handlerChange = ( e ) => {
        const { name, value } = e.target;
        setDatobuscar(( prevState ) => ({
            ...prevState,
            [ name ]: value
        }));
    };

    let idAmbiente = "";

    const handlerSubmit = (e) => {
        e.preventDefault()
        data.forEach((item) => {
            let ambpiso = item.ambiente + " " + item.piso;
            if (ambpiso === ambientepiso) {
                idAmbiente = item._id;
                return dispatch(obtenerAmbiente(idAmbiente));
            }
            else {
                console.log("El ambiente no existe en la base de datos");
            }
        });
    };

    return (
        <div className="card-header">
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder="Ambiente" name="ambientepiso" value={ambientepiso} onChange={handlerChange}/>
                <button type="submit" className="btn btn-light">Buscar</button>
            </form>
        </div>
    );
};
