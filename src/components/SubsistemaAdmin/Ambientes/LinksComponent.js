import React,{useState} from 'react'
import Head from '../../head/Head'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { DashBoardComponent } from '../dashboard/DashBoardComponent'

export const LinksComponent = () => {
    const data = [
        {id:1, semestre:'2',materia:'Estructura de datos', sigla:'SIS-310',link:'https://gbidcsjnxs&nkcdn'},
        {id:2, semestre:'3',materia:'Estructura de datos', sigla:'SIS-310',link:'https://gbidcsjnxs&nkcdn'},
        {id:2, semestre:'5',materia:'Estructura de datos', sigla:'SIS-310',link:'https://gbidcsjnxs&nkcdn'},
          
    ]
    const [dates, setDates]=useState(data);
    const [update, setUpdate]=useState(false);
    const [delet, setDelet]=useState(false);
    const [insert, setInsert]=useState(false);
    const [datoselect, setDatoselect]=useState({
        id:'',
        semestre:'',
        materia:'',
        sigla:'',
        link:'',
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
             datos.semestre=datoselect.semestre;
             datos.materia=datoselect.materia;
             datos.sigla=datoselect.sigla;
             datos.link=datoselect.link;
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
            <div className="tabla">
           <Button color="success" onClick={()=>openModal()}>INSERTAR</Button>
           <br/><br/>
            <table className=" table-bordered thead-dark">
               <thead>
                   <tr>
                       <th>SEMESTRE</th>
                       <th>MATERIA </th>
                       <th>  SIGLA</th>
                       <th>ENLACES ZOOM</th>
                       <th>ACCIONES</th>
                   </tr>
               </thead>
               <tbody>
                   {dates.map((item)=>(
                       <tr> 
                           <td>{item.semestre}</td>
                           <td>{item.materia}</td>
                           <td>{item.sigla}</td>
                           <td>{item.link}</td>
                           
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
                    <Label for="link">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={datoselect && datoselect.id}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SEMESTRE</Label>
                    <Input className="form-control" type="number" name="semestre" 
                    value={datoselect && datoselect.semestre} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>MATERIA</Label>
                    <Input className="form-control" type="text" name="materia"  
                    value={datoselect && datoselect.materia}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SIGLA</Label>
                    <Input className="form-control" type="text" name="sigla"  
                    value={datoselect && datoselect.sigla}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>LINK</Label>
                    <Input className="form-control" type="text" name="link"  
                    value={datoselect && datoselect.link}
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
                  {' '}{datoselect && datoselect.materia} {''}
                  {datoselect && datoselect.link}?
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
                    <Label for="link">ID</Label>
                    <Input className="form-control" readOnly type="text" 
                    value={dates[dates.length-1].id+1}
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SEMESTRE</Label>
                    <Input className="form-control" type="number" name="semestre" 
                    value={datoselect ? datoselect.semestre: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>MATERIA</Label>
                    <Input className="form-control" type="text" name="materia"  
                    value={datoselect ? datoselect.materia: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>SIGLA</Label>
                    <Input className="form-control" type="text" name="sigla"  
                    value={datoselect ? datoselect.sigla: ''} 
                    onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>LINK</Label>
                    <Input className="form-control" type="text" name="link"  
                    value={datoselect ? datoselect.link: ''} 
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
       
           
        </>
    )
}
