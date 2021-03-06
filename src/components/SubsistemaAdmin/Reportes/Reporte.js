import React, { useState } from 'react'
import "./index.css";
import { SearchOutlined,PrinterOutlined, AuditOutlined } from '@ant-design/icons';

export const Reporte = () => {
           
const planillas={
     horarios: [{
            grupo:'1',
            semestre:'7',
            lunes:'7:45-10:00',
            martes:'16:15-18:30',
            docente:'Ing Liam'
     } ,
     {
            grupo:'2',
            semestre:'5',
            lunes:'7:45-10:00',
            martes:'16:15-18:30',
            docente:'Ing Bastian'
        }]
   }
    
    const [values, setValues] = useState({
        semestre: '',
        grupo: '',
      })
     
      const [search, setSearch] = useState({
        semestre: '',
        grupo: '',
       
      })
    const validate=()=>{
      for(let i=0;i<planillas.horarios.length;i++){
          const val=planillas.horarios[i];
         if(search.semestre==val.semestre && search.grupo==val.grupo){

        }
      };
    }
    console.log(planillas.horarios);
    return (
        <div className="wrapper">
        
        <div className="barraBusqueda">
        <h1 style={{width:'300px'}}> <AuditOutlined />  PLANILLAS</h1>
            
        <div className="table">
            
                
        </div>
            <input
              type="text"
              placeholder="Semestre"
              className="textField"
              name="busqueda"
              //value={this.state.busqueda}
             // onChange={this.onChange}
            />
            <button type="button" className="btnBuscar" >
            <SearchOutlined style={{color:'white',fontSize: '16px'}} />
            </button>
            <br/>
            <br/>
    

            <input
              type="text"
              placeholder="Grupo"
              className="textField"
              name="busqueda"
              //value={this.state.busqueda}
             // onChange={this.onChange}
            />
            <button type="button" className="btnBuscar" >
            <SearchOutlined style={{color:'white',fontSize: '16px'}}  />
           
            </button>
            <div className="createAccount">
  
    
              <button type="submit" ><PrinterOutlined />     Emitir</button>
              
            </div>
          </div>
        </div>
    )
}
