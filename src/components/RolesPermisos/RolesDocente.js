import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
//import Head from '../head/Head';
//import 'bootstrap/dist/css/bootstrap.css'; 
//import CargaHorariaDocentes from '../CargaHoraiaDocentes/CargaHorariaDocentes';
import './stylos.css';


const RolesDocente = () => {
    const data = [
        {id:1, name:'Luis Alejandro', surname:'Perez Cruz', phone:'78965412', role:'user', status:'activo'},
        {id:2, name:'Juan', surname:'Choque', phone:'78923612', role:'user', status:'activo'},
        {id:3, name:'Paola', surname:'Castillo Cruz', phone:'78565412', role:'user', status:'activo'},
        {id:4, name:' Alejandro', surname:'Perez Cruz', phone:'7205312', role:'user', status:'activo'},
        {id:5, name:'Luis ', surname:'Escalante Palma', phone:'78653412', role:'user', status:'activo'},
    ]
    const [dates, setDates]=useState(data);
    const [update, setUpdate]=useState(false);
    const [delet, setDelet]=useState(false);
    const [insert, setInsert]=useState(false);
    const [datoselect, setDatoselect]=useState({
        id:'',
        name:'',
        surname:'',
        phone:'',
        role:'',
        status:''
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
             datos.name=datoselect.name;
             datos.surname=datoselect.surname;
             datos.phone=datoselect.phone;
             datos.role=datoselect.role;
             datos.status=datoselect.status;
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
        <h1>DOCENTES</h1>
        <div className="tabla">
           <Button color="success" onClick={()=>openModal()}>INSERTAR</Button>
           <br/><br/>
            <table className=" table-hover table-bordered thead-dark">
               <thead>
                   <tr>
                       <th>ID</th>
                       <th>NOMBRE</th>
                       <th>APELLIDO</th>
                       <th>TELEFONO</th>
                       <th>ROL</th>
                       <th>ESTADO</th>
                       <th>ACCIONES</th>
                   </tr>
               </thead>
               <tbody>
                   {dates.map((item)=>(
                       <tr> 
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.surname}</td>
                           <td>{item.phone}</td>
                           <td>{item.role}</td>
                           <td>{item.status}</td>
                            <td>
                               <button className="btn btn-primary" onClick={()=>select(item, 'Editar')}>EDITAR</button>{'  '}
                               {'  '}
                               <button className="btn btn-danger" onClick={()=>select(item, 'Eliminar')}>ELIMINAR</button>
                           </td>
                       </tr>
                   ))}
               </tbody>
            </table>
            <Modal isOpen={update}>
            <ModalHeader>
                    <h1>EDITAR</h1>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="usuario">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={datoselect && datoselect.id}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>NOMBRE</Label>
                    <Input className="form-control" type="text" name="name" 
                    value={datoselect && datoselect.name} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>APELLIDO</Label>
                    <Input className="form-control" type="text" name="surname"  
                    value={datoselect && datoselect.surname}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>TELEFONO</Label>
                    <Input className="form-control" type="number" name="phone"  
                    value={datoselect && datoselect.phone}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>ROL</Label>
                    <Input className="form-control" type="chekbox" name="role"  
                    value={datoselect && datoselect.role}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>ESTADO</Label>
                    <Input className="form-control" type="checkbox" name="status" 
                    value={datoselect && datoselect.status}
                    onChange={handleChange}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>editar()}>EDITAR</Button>
                <Button color="secondary" onClick={()=>setUpdate}>CANCELAR</Button>
            </ModalFooter>
        </Modal>



        <Modal isOpen={delet}>
            <ModalBody>
                  ¿Estas segur@ que quieres Eliminar a 
                  {' '}{datoselect && datoselect.name}
                  {datoselect && datoselect.surname}?
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={()=>eliminar()}>SI</Button>
                <Button color="secondary" onClick={()=>setDelet(false)}>NO</Button>
            </ModalFooter>
        </Modal>



        <Modal isOpen={insert}>
            <ModalHeader>
                    <h1>INSERTAR</h1>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="usuario">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={dates[dates.length-1].id+1}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>NOMBRE</Label>
                    <Input className="form-control" type="text" name="name" 
                    value={datoselect ? datoselect.name: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>APELLIDO</Label>
                    <Input className="form-control" type="text" name="surname"  
                    value={datoselect ? datoselect.surname: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>TELEFONO</Label>
                    <Input className="form-control" type="number" name="phone"  
                    value={datoselect ? datoselect.phone: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>ROL</Label>
                    <Input className="form-control" type="chekbox" name="role"  
                    value={datoselect ? datoselect.role: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>ESTADO</Label>
                    <Input className="form-control" type="checkbox" name="status" 
                    value={datoselect ? datoselect.status: ''} 
                    onChange={handleChange}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>insertar()}>INSERTAR</Button>
                <Button color="secondary" onClick={()=>setInsert(false)}>CANCELAR</Button>
            </ModalFooter>
        </Modal>

        </div>
        </>
    )
}

export default RolesDocente;