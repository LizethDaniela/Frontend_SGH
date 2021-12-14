import React from 'react';
import { SearchComponent } from '../Horarios/components/SearchComponent';
import { TitleComponent } from '../Horarios/components/TitleComponent';
import "./horario.css";
  import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
export  const ModificarHorarioComponent =()=>{

    return(
      <>
      <Head/>
      <DashBoardComponent/>
      <div className="container">
            <div className="horario">
                <TitleComponent/>
                <SearchComponent/>
                
            </div>
      </div>

    </>
    )
  
}

