import React from 'react';
import { BsCalendar3, BsXCircleFill, BsSave2Fill} from "react-icons/bs";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./horario.css";
import {
    Link
  } from "react-router-dom";
export class ModificarHorarioComponent extends React.Component{
  state={
    abierto: false,
  }
  

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
       <div className="container">
       
            <div className="horario">
                
                <div className="cab">
                    <h3>Editar Horarios    <BsCalendar3/></h3>
                    <hr/>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Semestre</option>
                                    <option value="1">1° Semestre</option>
                                    <option value="2">2° Semestre</option>
                                    <option value="3">3° Semestre</option>
                                    <option value="4">4° Semestre</option>
                                    <option value="5">5° Semestre</option>
                                    <option value="6">6° Semestre</option>
                                    <option value="7">7° Semestre</option>
                                    <option value="8">8° Semestre</option>
                                    <option value="9">9° Semestre</option>

                                </select>
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Grupo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">    
                                     <Link to="/modificar" ><Button  className="btn-op"color="primary">BUSCAR</Button></Link>
                                </div> 
                                <hr/>           
                </div>
                <div className="formatohorario">
                <button className="btn-a"  >HORARIO</button>
                <button className="btn-a" >LUNES</button>
                <button className="btn-a"  >MARTES</button>
                <button className="btn-a" >MIERCOLES</button>
                <button className="btn-a" >JUEVES</button>
                <button className="btn-a" >VIERNES</button>
                <button className="btn-a" >SABADO</button>
                <button className="btn-a" >7:45-8:30</button>
                <button className="btn-a" onClick={this.abrirModal} >FISICA I
                Amb 2 piso2</button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" >8:30-9:15</button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" >9:45-10:00</button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                <button className="btn-a" >10:00-10:45</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">10:45-11:30</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">11:30-12:15</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">14:00-14:45</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">14:45-15:30</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">15:30-16:15</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">16:15-17:00</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">17:00-17:45</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a">17:45-18:30</button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a"onClick={this.abrirModal}></button>
                <button className="btn-a" onClick={this.abrirModal}></button>
                </div>
                
            </div>
        
    </div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Horario
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="materia">Materia</Label>
            <Input type="text" id="materia"/> 
          </FormGroup>
          <FormGroup>
            <Label for="ambiente">Ambiente</Label>
            <Input type="text" id="ambiente"/> 
          </FormGroup>
          <FormGroup>
            <Label for="ambiente">Hora</Label>
            <Input type="time" id="ambiente"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button type="submit" color="success" className="btn-op"onClick={this.cambiarboton}><BsSave2Fill/>     Guardar</Button>
            <Button color="danger" className="btn-op"onClick={this.abrirModal}><BsXCircleFill/>    Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

