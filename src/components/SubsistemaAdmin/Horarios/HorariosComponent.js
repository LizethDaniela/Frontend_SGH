import React from 'react';
import "./horario.css";

import { TitleComponent } from '../Horarios/components/TitleComponent';
import { ContainerHorarioComponent } from '../Horarios/components/ContainerHorarioComponent';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';


export const HorariosComponent=(props)=> {
    return(
      <>
      <Head/>
      <DashBoardComponent/>
      <div className="container">
            <div className="horario">
                <TitleComponent/>
                
                <ContainerHorarioComponent/>
                
            </div>
            
            </div>
  
        </>

      
    )
  
}
