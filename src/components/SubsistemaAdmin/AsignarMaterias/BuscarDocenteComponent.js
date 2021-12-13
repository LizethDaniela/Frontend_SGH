import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerDocente } from '../../../actions/registerDocente';

export const BuscarDocenteComponent = () => {
    const dispatch = useDispatch();
    const { docente } = useSelector((state) => state);
    const { data } = docente;
    console.log(data);

    const { obtener_docente } = docente;
    console.log(obtener_docente);

    const [ datobuscar, setDatobuscar ] = useState({
        nombredoc: ""
    });

    const { nombredoc } = datobuscar;

    const handlerChange = ( e ) => {
        const { name, value } = e.target;
        setDatobuscar(( prevState ) => ({
            ...prevState,
            [ name ]: value
        }));
    };

    let idDocente = "";

    const handlerSubmit = (e) => {
        e.preventDefault()
        data.forEach((item) => {
            let nombre_completo = item.nombre + " " + item.ap_paterno + " " + item.ap_materno;
            if (nombre_completo === nombredoc) {
                idDocente = item._id;
                return dispatch(obtenerDocente(idDocente));
            }
            else {
                console.log("El docente no existe en la base de datos");
            }
        });
    };

    return (
        <div className="card-header">
            <form className="d-grid gap-2 d-md-flex justify-content-md-end" onSubmit={handlerSubmit}>
                <input type="text" placeholder="Nombre del Docente" name="nombredoc" value={nombredoc} onChange={handlerChange}/>
                <button type="submit" className="btn btn-light">Buscar</button>
            </form>
        </div>
    );
};
