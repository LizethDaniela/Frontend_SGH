import React from 'react'
import Head from '../head/Head';
import { DashDocente } from './DashDocente';

export const PrincipalDocente= () => {
    return (
       <>
       <Head/>
       <DashDocente/>
            <div className="container">
                aqui el contenido principal docente
            </div>
           
        </>
    );
};