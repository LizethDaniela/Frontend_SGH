import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { listStudents } from '../../../actions/registerEstudent';

export const ObtenerStudentsList = () => {
    const dispatch = useDispatch();
    
    const handlerlistStudents = () => {
        dispatch(listStudents());
    };

    return (
        
        <button type="button" className="link" onClick = { handlerlistStudents() }><FaUsers/>  Ver Lista de Estudiantes </button>
        
    );
};
