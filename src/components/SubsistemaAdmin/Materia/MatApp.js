
import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import Head from '../../head/Head';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { FaClipboardList,FaPencilAlt} from "react-icons/fa";
export const MatApp = () => {
    const data = [
        {id:1, name:'Tecnicas de Programación 1', sigla:'SIS-110',semestre:'1', cargasem:'8', docente:'Lopez Luis'},
        {id:2, name:'Computación básica', sigla:'SIS-115',semestre:'1', cargasem:'12',docente:'gustavo puita'},
        {id:3, name:'Estructura de datos', sigla:'SIS-310',semestre:'3',cargasem:'10', docente:'limber ruiz'},
       
    ]
    const [dates, setDates]=useState(data);
    const [update, setUpdate]=useState(false);
    const [delet, setDelet]=useState(false);
    const [insert, setInsert]=useState(false);
    const [datoselect, setDatoselect]=useState({
        id:'',
        name:'',
        sigla:'',
        semestre:'',
        cargasem:'',
        docente:'',
    });
    const select=(item, caso)=>{
        setDatoselect(item);
        (caso==='Editar')?setUpdate(true):
        setDelet(true)
    }
    const handleChange=e=>{
        const {name, value}=e.target;
        setDatoselect((prevState)=>({
            ...prevState,
            [name]:value
        }));
        console.log(datoselect);
    }
   const editar=()=>{
       var newdata=dates;
       newdata.map((datos)=>{
         if(datos.id===datoselect.id){
             datos.name=datoselect.name;
             datos.sigla=datoselect.sigla;
             datos.semestre=datoselect.semestre;
             datos.cargasem=datoselect.cargasem;
             datos.docente=datoselect.docente;
         }
       });
       setDates(newdata);
       setUpdate(false);
   }
   const eliminar=()=>{
      setDates(dates.filter
        (datos=>datos.id!==datoselect.id));
        setDelet(false);
   }
   const openModal=()=>{
       setDatoselect(null);
       setInsert(true);
   }
   const insertar=()=>{
       var valorInsertar=datoselect;
       valorInsertar.id=dates[dates.length-1].id+1;
       var newDate=dates;
       newDate.push(valorInsertar);
       setDates(newDate);
       setInsert(false);
   }

    return (
        <>
         <Head/>
        <DashBoardComponent/>
        <div className="container">
        <div className="alineacion">
            <h3> <FaClipboardList/>Lista de Materias</h3>
        <div className="tabla">
           <Button color="success" onClick={()=>openModal()}>INSERTAR</Button>
           <br/><br/>
            <table className=" table-bordered thead-dark">
               <thead>
                   <tr>
                       <th>ID</th>
                       <th>NOMBRE</th>
                       <th>SIGLA</th>
                       <th>SEMESTRE</th>
                       <th>CARGA HORARIA</th>
                       <th>DOCENTE</th>
                       <th>ACCIONES</th>
                   </tr>
               </thead>
               <tbody>
                   {dates.map((item)=>(
                       <tr> 
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.sigla}</td>
                           <td>{item.semestre}</td>
                           <td>{item.cargasem}</td>
                           <td>{item.docente}</td>
                            <td>
                               <button className="btn btn-primary" onClick={()=>select(item, 'Editar')}><FaPencilAlt/>  EDITAR</button>{'  '}
                               {'  '}
                               <button className="btn btn-danger" onClick={()=>select(item, 'Eliminar')}>ELIMINAR</button>
                           </td>
                       </tr>
                   ))}
               </tbody>
            </table>
            <Modal isOpen={update}>
            <ModalHeader>
                    <h2>EDITAR</h2>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="materia">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={datoselect && datoselect.id}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>MATERIA</Label>
                    <Input className="form-control" type="text" name="name" 
                    value={datoselect && datoselect.name} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SIGLA</Label>
                    <Input className="form-control" type="text" name="sigla"  
                    value={datoselect && datoselect.sigla}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SEMESTRE</Label>
                    <Input className="form-control" type="text" name="semestre"  
                    value={datoselect && datoselect.semestre}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>CARGA HORARIA SEMANAL</Label>
                    <Input className="form-control" type="number" name="cargasem"  
                    value={datoselect && datoselect.cargasem}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>DOCENTE</Label>
                    <Input className="form-control" type="text" name="docente"  
                    value={datoselect && datoselect.docente}
                    onChange={handleChange}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>editar()}>EDITAR</Button>
                <Button color="secondary" onClick={()=>setUpdate(false)}>CANCELAR</Button>
            </ModalFooter>
        </Modal>



        <Modal isOpen={delet}>
            <ModalBody>
                  ¿Estas segur@ que quieres Eliminar  
                  {' '}{datoselect && datoselect.name} {''}
                  {datoselect && datoselect.sigla}?
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={()=>eliminar()}>SI</Button>
                <Button color="secondary" onClick={()=>setDelet(false)}>NO</Button>
            </ModalFooter>
        </Modal>



        <Modal isOpen={insert}>
            <ModalHeader>
                    <h2>INSERTAR</h2>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="materia">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={dates[dates.length-1].id+1}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>MATERIA</Label>
                    <Input className="form-control" type="text" name="name" 
                    value={datoselect ? datoselect.name: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SIGLA</Label>
                    <Input className="form-control" type="text" name="sigla"  
                    value={datoselect ? datoselect.sigla: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SEMESTRE</Label>
                    <Input className="form-control" type="number" name="semestre"  
                    value={datoselect ? datoselect.semestre: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>CARGA HORARIA SEMANAL</Label>
                    <Input className="form-control" type="number" name="cargasem"  
                    value={datoselect ? datoselect.cargasem: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>DOCENTE</Label>
                    <Input className="form-control" type="text" name="docente"  
                    value={datoselect ? datoselect.docente: ''} 
                    onChange={handleChange}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>insertar()}>INSERTAR</Button>
                <Button color="secondary" onClick={()=>setInsert(false)}>CANCELAR</Button>
            </ModalFooter>
        </Modal>
        </div>
        </div> 
         </div>   
        </>
    )
}
