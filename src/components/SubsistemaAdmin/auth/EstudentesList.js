import React , {useState}from 'react'
import { FaUsers,FaPencilAlt,FaTrashAlt } from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import Head from '../../head/Head'
import { DashBoardComponent } from '../dashboard/DashBoardComponent'

export const EstudentesList = () => {
    const data = [
        {id:1, ci:'4464',ru:'45120',name:'Limber', surname:'Calizaya', materno:'Cruz',fn:'10/12/2000',email:'limber@gmail.com',phone:'45123654'},
        {id:2, ci:'4564',ru:'45120',name:'Alex', surname:'Choque',materno:'Zeballos', fn:'10/12/2000',email:'alex@gmail.com',phone:'45123654'},
        {id:3, ci:'2364',ru:'45120',name:'Cristhian', surname:'Castillo',materno:'Cruz',fn:'10/12/2000',email:'cris@gmail.com',phone:'45123654' },
        {id:4, ci:'4544',ru:'45120',name:' Dilan', surname:'Perez',materno: 'Copa', fn:'10/12/2000',email:'dilan@gmail.com',phone:'45123654'},
        {id:5, ci:'9584',ru:'45120',name:'Luis ', surname:' Palma' ,materno:'Ricaldi', fn:'10/12/2000',email:'luis@gmail.com',phone:'45123654'},
       
    ]
    const [dates, setDates]=useState(data);
    const [update, setUpdate]=useState(false);
    const [delet, setDelet]=useState(false);
    const [datoselect, setDatoselect]=useState({
        id:'',
        ci:'',
        ru:'',
        name:'',
        surname:'',
        materno:'',
        fn:'',
        email:'',
        phone:'',
        
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
            datos.ru=datoselect.ru;
             datos.name=datoselect.name;
             datos.surname=datoselect.surname;
             datos.materno=datoselect.materno;
             datos.fn=datoselect.fn;
             datos.email=datoselect.email;
             datos.phone=datoselect.phone;
             
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
   

    return (
        <>
            <Head/>
            <DashBoardComponent/>
            <div className="container">
            <div className="alineacion">
            <h3><FaUsers/> Lista De Estudiantes</h3>
            <div className="tabla">
           
            <table className=" table-bordered ">
               <thead>
                   <tr>
                       <th>CI</th>
                       <th>RU</th>
                       <th>Nombre</th>
                       <th>Apellidos</th>
                       <th>Fecha Nacimiento</th>
                       <th>Email</th>
                       <th>Teléfono</th>
                       
                       <th>ACCIONES</th>
                   </tr>
               </thead>
               <tbody>
                   {dates.map((item)=>(
                       <tr> 
                           <td>{item.ci}</td>
                           <td>{item.ru}</td>
                           <td>{item.name}</td>
                           <td>{item.surname} {item.materno}</td>
                           <td>{item.fn}</td>
                           <td>{item.email}</td>
                           <td>{item.phone}</td>
                           
                            <td>
                               <button className="btn btn-primary" onClick={()=>select(item, 'Editar')}><FaPencilAlt/> EDITAR</button>{'  '}
                               {'  '}
                               <button className="btn btn-danger" onClick={()=>select(item, 'Eliminar')}><FaTrashAlt/> ELIMINAR</button>
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
                    <Label for="usuario">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={datoselect && datoselect.id}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>CI</Label>
                    <Input className="form-control" type="text" name="ci"  
                    value={datoselect && datoselect.ci}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>RU</Label>
                    <Input className="form-control" type="number" name="ru"  
                    value={datoselect && datoselect.ru}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>NOMBRE</Label>
                    <Input className="form-control" type="text" name="name" 
                    value={datoselect && datoselect.name} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>APELLIDO PATERNO</Label>
                    <Input className="form-control" type="text" name="surname"  
                    value={datoselect && datoselect.surname}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>APELLIDO MATERNO</Label>
                    <Input className="form-control" type="text" name="materno"  
                    value={datoselect && datoselect.materno}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>FECHA DE NACIMIENTO</Label>
                    <Input className="form-control" type="date" name="fn"  
                    value={datoselect && datoselect.fn}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>E-MAIL</Label>
                    <Input className="form-control" type="text" name="email"  
                    value={datoselect && datoselect.email}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label> TELÉFONO</Label>
                    <Input className="form-control" type="number" name="number"  
                    value={datoselect && datoselect.phone}
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
                  ¿Estas segur@ que quieres Eliminar a 
                  {' '}{datoselect && datoselect.name}{' '}
                  {datoselect && datoselect.surname}?
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={()=>eliminar()}>SI</Button>
                <Button color="secondary" onClick={()=>setDelet(false)}>NO</Button>
            </ModalFooter>
        </Modal>
        </div>
            </div>
            </div>
        </>
    )
}