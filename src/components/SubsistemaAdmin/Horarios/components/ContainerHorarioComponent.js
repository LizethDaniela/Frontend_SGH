import React, { useState } from 'react'
import ".././horario.css";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import {BsXCircleFill, BsSave2Fill} from "react-icons/bs";
//import { useForm } from '../../../hooks/useForm';

export const ContainerHorarioComponent = (props) => {
  const data = [
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:1,dia:'lunes'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:1,dia:'martes'},
    { docente:'Juan', siglaMateria:'SIS-210', ambiente:'Amb2Piso1',idperiodo:1,dia:'miercoles'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:1,dia:'jueves'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:2,dia:'lunes'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:3,dia:'martes'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:11,dia:'lunes'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:10,dia:'martes'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:9,dia:'jueves'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:8,dia:'viernes'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:5,dia:'viernes'},
    { docente:'Juan', siglaMateria:'SIS-110', ambiente:'Amb2Piso1',idperiodo:6,dia:'sabado'},

]
    const[newId, setNewId]=useState("");
const[materia, setMateria]=useState("");
const[ambiente, setAmbiente]=useState("");
const[inicio, setInicio]=useState("");
const[final, setFinal]=useState("");
const[insert, setInsert] = useState(false);
const idHandler=(event)=>{
    console.log(event.target.value);
    setNewId(event.target.value);
   
}
const materiaHandler=(event)=>{
    setMateria(event.target.value);  
}
const ambienteHandler=(event)=>{
    setAmbiente(event.target.value);
  
}
const incioHandler=(event)=>{
  setInicio(event.target.value);

}
const finalHandler=(event)=>{
  setFinal(event.target.value);

}
const submitHandler=(event)=>{
    event.preventDefault();
    props.onNewHor(newId, materia, ambiente,inicio, final);
    setNewId(" ");
    setMateria(" ");
    setAmbiente(" ");
    setInicio(" ");
    setFinal(" ");
}
  const openModal=()=>{
    //setNewId(null);
   // setMateria(null);
  //  setAmbiente(null);
    //setInicio(null);
    //setFinal(null);
    setInsert(true);
}


    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    let list=[];
    list=[...list,{newId, materia,ambiente,inicio,final}]
   
    console.log(list);

    return (
        <div>
            <div className="formatohorario">
                
                <button className="btn-a"  >HORARIO</button>
                <button className="btn-a" >LUNES</button>
                <button className="btn-a"  >MARTES</button>
                <button className="btn-a" >MIERCOLES</button>
                <button className="btn-a" >JUEVES</button>
                <button className="btn-a" >VIERNES</button>
                <button className="btn-a" >SABADO</button>
                <button className="btn-a" >7:45-8:30</button>
                
                <button className="btn-a"  onClick={openModal} >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===1?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===1?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===1?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===1?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===1?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===1?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                
                <button className="btn-a" >8:30-9:15</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===2?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===2?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===2?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===2?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===2?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===2?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a" >9:45-10:00</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===3?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===3?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===3?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===3?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===3?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===3?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a" >10:00-10:45</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===4?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===4?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===4?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===4?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===4?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===4?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">10:45-11:30</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===5?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===5?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===5?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===5?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===5?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===5?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">11:30-12:15</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===6?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===6?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===6?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===6?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===6?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===6?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">14:00-14:45</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===7?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===7?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===7?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===7?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===7?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===7?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">14:45-15:30</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===8?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===8?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===8?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===8?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===8?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===8?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">15:30-16:15</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===9?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===9?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===9?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===9?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===9?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===9?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">16:15-17:00</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===10?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===10?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===10?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===10?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===10?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===10?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">17:00-17:45</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===11?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===11?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===11?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===11?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===11?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===11?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a">17:45-18:30</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===12?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===12?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===12?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===12?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===12?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===12?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
               <button className="btn-a">17:45-18:30</button>
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='lunes' && item.idperiodo===13?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='martes' && item.idperiodo===13?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='miercoles' && item.idperiodo===13?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='jueves' && item.idperiodo===13?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='viernes' && item.idperiodo===13?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
                <button className="btn-a"  >{data.map((item)=>(<>
                {item.dia==='sabado' && item.idperiodo===13?(<> {item.siglaMateria} {item.ambiente}
                </>):(<></>)} 
                </> ))}</button> 
               </div> 
                <Modal isOpen={insert} >
        <ModalHeader>
          Horario
        </ModalHeader>
        <ModalBody onSubmit={submitHandler}>
        <FormGroup >
            <Label for="id">ID</Label>
            <Input type="number" id="id"
             value={newId}
            onChange={idHandler} /> 
          </FormGroup>
          <FormGroup>
            <Label for="materia">Materia</Label>
            <Input type="text" id="materia"
             value={materia}
            onChange={materiaHandler} /> 
          </FormGroup>
          <FormGroup >
            <Label for="ambiente">Ambiente</Label>
            <Input type="text" id="ambiente"
             value={ambiente}
            onChange={ambienteHandler}/> 
          </FormGroup>
          <FormGroup >
            <Label for="hora_i">Hora Inicio</Label>
            <Input type="time" id="entrada"
             value={inicio}
            onChange={incioHandler} /> 
          </FormGroup>
          <FormGroup >
            <Label for="hora_f">Hora finalización</Label>
            <Input type="time" id="salida"
             value={final}
            onChange={finalHandler} /> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button type="submit" color="success" className="btn-op" ><BsSave2Fill/>     Guardar</Button>
            <Button color="danger" className="btn-op"onClick={()=>setInsert(false)}><BsXCircleFill/>    Cerrar</Button>
        </ModalFooter>
      </Modal>
      
        </div>
    )
}
