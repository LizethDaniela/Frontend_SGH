import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerSemestre } from '../../../actions/registerSemestre';

export const SearchSemestreComponent = () => {
    const dispatch = useDispatch();
    const { sem } = useSelector((state) => state);
    const { data } = sem;
    console.log(data);

    const { obtener_semestre } = sem;
    console.log(obtener_semestre);

    const [ datobuscar, setDatobuscar ] = useState({
        semestregrupo: ""
    });

    const { semestregrupo } = datobuscar;

    const handlerChange = ( e ) => {
        const { name, value } = e.target;
        setDatobuscar(( prevState ) => ({
            ...prevState,
            [ name ]: value
        }));
    };

    let idSemestre = "";

    const handlerSubmit = (e) => {
        e.preventDefault()
        data.forEach((item) => {
            let semgrupo = item.semestre + " " + item.grupo;
            if (semgrupo === semestregrupo) {
                idSemestre = item._id;
                return dispatch(obtenerSemestre(idSemestre));
            }
            else {
                console.log("El semestre no existe en la base de datos");
            }
        });
    };

    return (
        <div className="card-header">
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder="Semestre" name="semestregrupo" value={semestregrupo} onChange={handlerChange}/>
                <button type="submit" className="btn btn-light">Buscar</button>
            </form>
        </div>
    );
};
