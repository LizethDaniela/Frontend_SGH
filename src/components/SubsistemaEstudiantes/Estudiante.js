import React from 'react';
import Head from '../head/Head';
import { DashEstudiante } from './DashEstudiante';


export const Estudiante= () => {
   
    return (
       <>
          
            <Head/>
            <DashEstudiante/>
            <div className="container">
                aqui el contenido para programar materias
            </div>
           
       </>
    );
};