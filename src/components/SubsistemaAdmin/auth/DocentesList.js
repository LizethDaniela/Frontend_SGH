import React ,{useState}from 'react'
import { FaUsersCog} from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import Head from '../../head/Head'
import { DashBoardComponent } from '../dashboard/DashBoardComponent'


export const DocentesList = () => {
    const data = [
        {id:1,ci:'4464', name:'Limber', surname:'Calizaya', materno:'Cruz',fn:'10/12/2000',email:'limber@gmail.com',phone:'45123654', carga:'4'},
        {id:2,ci:'9974', name:'Alex', surname:'Choque',materno:'Zeballos', fn:'10/12/2000',email:'alex@gmail.com',phone:'45123654',  carga:'4'},
        {id:3,ci:'8874', name:'Cristhian', surname:'Castillo',materno:'Cruz',fn:'10/12/2000',email:'cris@gmail.com',phone:'45123654',  carga:'4'},
        {id:4, ci:'5464',name:' Dilan', surname:'Perez',materno: 'Copa', fn:'10/12/2000',email:'dilan@gmail.com', phone:'45123654', carga:'4'},
        {id:5,ci:'1234', name:'Luis ', surname:' Palma' ,materno:'Ricaldi', fn:'10/12/2000',email:'luis@gmail.com',phone:'45123654',  carga:'4'},
       
    ]
    const [dates, setDates]=useState(data);
    const [update, setUpdate]=useState(false);
    const [delet, setDelet]=useState(false);
    const [datoselect, setDatoselect]=useState({
        id:'',
        ci:'',
        name:'',
        surname:'',
        materno:'',
        fn:'',
        email:'',
        phone:'',
        carga:'',
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
            datos.ci=datoselect.ci;
             datos.name=datoselect.name;
             datos.surname=datoselect.surname;
             datos.materno=datoselect.materno;
             datos.fn=datoselect.fn;
             datos.email=datoselect.email;
             datos.phone=datoselect.phone;
             datos.carga=datoselect.carga;
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
      
   }
   

    return (
        <>
            <Head/>
            <DashBoardComponent/>
            <div className="container">
            <h3><FaUsersCog/> LISTA DE DOCENTES</h3>
            <div className="tabla">
           
            <table className=" table-bordered thead-dark">
               <thead>
                   <tr>
                       <th>CI</th>
                       <th>Nombre</th>
                       <th>Apellidos</th>
                       <th>Fecha Nacimiento</th>
                       <th>Email</th>
                       <th>Teléfono</th>
                       <th>Carga</th>
                       <th>ACCIONES</th>
                   </tr>
               </thead>
               <tbody>
                   {dates.map((item)=>(
                       <tr> 
                           <td>{item.ci}</td>
                           <td>{item.name}</td>
                           <td>{item.surname} {item.materno}</td>
                           <td>{item.fn}</td>
                           <td>{item.email}</td>
                           <td>{item.phone}</td>
                           <td>{item.carga}</td>
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
                <FormGroup>
                    <Label>CARGA HORARIA</Label>
                    <Input className="form-control" type="number" name="carga"  
                    value={datoselect && datoselect.carga}
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
        </>
    )
}
