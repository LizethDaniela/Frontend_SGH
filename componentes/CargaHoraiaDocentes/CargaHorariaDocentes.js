import React from'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'; 
import { render } from '@testing-library/react';

const data = [
    {id:1, name:'Luis Alejandro', surname:'Perez Cruz', phone:'78965412', role:'user', status:'activo'},
    {id:2, name:'Juan', surname:'Choque', phone:'78923612', role:'user', status:'activo'},
    {id:3, name:'Paola', surname:'Castillo Cruz', phone:'78565412', role:'user', status:'activo'},
    {id:4, name:' Alejandro', surname:'Perez Cruz', phone:'7205312', role:'user', status:'activo'},
    {id:5, name:'Luis ', surname:'Escalante Palma', phone:'78653412', role:'user', status:'activo'},
];

class CargaHorariaDocentes extends React.Component{
     state={
         abierto:false,
         data:data,
         form:{
             id:'',
             name:'',
             surname:'',
             phone:'',
             role:'',
             status:'',
         }
     };
   /*  handleChange=e=>{
        this.setStateform({
            form:{...this.stateform.form, [e.target.name]:e.target.value,
            }
        });
    }*/
     abrirModal=()=>{
         this.setState({abierto: !this.state.abierto});
     }
     handlerChange=e=>{
         this.setform({
             form:{
                 ...this.state.form,
                 [e.target.name]:e.target.value,
             }
         });
     }
     insertar=()=>{
         let valorNuevo={...this.state.form};
         valorNuevo.id=this.state.data.length+1;
         let lista=this.state.data;
         lista.push(valorNuevo);
         this.setState({data: lista, abierto:false});
     }
     

/*const CargaHorariaDocentes = () => {
    const [modal, setModal]=useState(false);
    const openModal=()=>{
        setModal(true);
    }*/
    //console.log(openModal)
    render(){
    return (
        <>
        <div className="principal">
            <div className="secundario">
               <Button color="success"  onClick={this.abrirModal}> INSERTAR</Button>
            </div>    
        </div>
        <Modal isOpen={this.state.abierto}>
            <ModalHeader>
                    NUEVO REGISTRO
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="usuario">ID</Label>
                    <Input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
                </FormGroup>
                <FormGroup>
                    <Label>NOMBRE</Label>
                    <Input className="form-control" type="text" name="name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>APELLIDO</Label>
                    <Input className="form-control" type="text" name="surname" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>TELEFONO</Label>
                    <Input className="form-control" type="number" name="phone" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>ROL</Label>
                    <Input className="form-control" type="chekbox" name="role" onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>ESTADO</Label>
                    <Input className="form-control" type="checkbox" name="status" onChange={this.handleChange}/>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>this.insertar()}>REGISTRAR</Button>
                <Button color="secondary" onClick={()=>this.abrirModal()}>CERRAR</Button>
            </ModalFooter>
        </Modal>
        </>
        )
    }
}
export default CargaHorariaDocentes;
