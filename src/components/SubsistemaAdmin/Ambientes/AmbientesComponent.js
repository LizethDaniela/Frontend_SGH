import React, {useState}from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import {FaRegBuilding,FaPencilAlt,FaTrashAlt} from "react-icons/fa";
import Head from '../../head/Head'
import { DashBoardComponent } from '../dashboard/DashBoardComponent'
import {Link} from "react-router-dom";
import "./ambientes.css"
export const AmbientesComponent = () => {
    const data = [
        {id:1, number:'7', capacidad:'60',planta:'1'},
        {id:2, number:'2', capacidad:'50',planta:'3'},
        {id:3, number:'', capacidad:'80',planta:'2'},   
    ]
    const [dates, setDates]=useState(data);
    const [update, setUpdate]=useState(false);
    const [delet, setDelet]=useState(false);
    const [insert, setInsert]=useState(false);
    const [datoselect, setDatoselect]=useState({
        id:'',
        number:'',
        capacidad:'',
        planta:'',
        
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
       newdata.map(datos=>{
         if(datos.id===datoselect.id){
             datos.number=datoselect.number;
             datos.capacidad=datoselect.capacidad;
             datos.planta=datoselect.planta;
           
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
    return (<>
        <Head/>
        <DashBoardComponent/>
        <div className="container">
       
        <div className="alineacion">
        <h3><FaRegBuilding/>Ambientes</h3>
        
        <div className="tabla">
            <Button color="success" onClick={()=>openModal()}>INSERTAR</Button>
           <br/><br/>
            <table className=" table-bordered">
               <thead className="bordes">
                   <tr className="bordes">
                       <th>ID</th>
                       <th>PLANTA</th>
                       <th>N°AMBIENTE</th>
                       <th>CAPACIDAD</th>
                       <th>ACCIONES</th>
                   </tr>
               </thead>
               <tbody className="bordes">
                   {dates.map((item)=>(
                       <tr> 
                           <td>{item.id}</td>
                           <td>{item.planta}</td>
                           <td>{item.number}</td>
                           <td>{item.capacidad}</td>
                           
                            <td>
                               <button className="btn btn-primary" onClick={()=>select(item, 'Editar')}><FaPencilAlt/> EDITAR</button>{'  '}
                               {'  '}
                               <button className="btn btn-danger" onClick={()=>select(item, 'Eliminar')}><FaTrashAlt/> ELIMINAR</button>
                           </td>
                       </tr>
                   ))}
               </tbody>
            </table>
            <Link to="/admin/ambientes/links" ><button type="button" className="link">LINKS </button></Link>
            <Modal isOpen={update}>
            <ModalHeader>
                    <h2>EDITAR</h2>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="ambiente">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={datoselect && datoselect.id}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>N° Ambiente</Label>
                    <Input className="form-control" type="number" name="number" 
                    value={datoselect && datoselect.number} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Capacidad de Estudiantes</Label>
                    <Input className="form-control" type="number" name="capacidad"  
                    value={datoselect && datoselect.capacidad}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>PLANTA</Label>
                    <Input className="form-control" type="number" name="planta"  
                    value={datoselect && datoselect.planta}
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
                  ¿Estas segur@ que quieres Eliminar Amb 
                  {' '}{datoselect && datoselect.number} piso
                  {datoselect && datoselect.planta}?
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
                    <Label for="ambiente">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={dates[dates.length-1].id+1}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>N° Ambiente</Label>
                    <Input className="form-control" type="number" name="number" 
                    value={datoselect ? datoselect.number: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Capacidad de Estudiantes</Label>
                    <Input className="form-control" type="number" name="capacidad"  
                    value={datoselect ? datoselect.capacidad: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Planta</Label>
                    <Input className="form-control" type="number" name="planta"  
                    value={datoselect ? datoselect.planta: ''} 
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