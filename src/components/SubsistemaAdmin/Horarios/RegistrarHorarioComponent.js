import React, { useEffect, useState } from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import { Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { registerHorario } from '../../../actions/registerHorario';
import "./horario.css";

export const RegistrarHorarioComponent = () => {
    const dispatch = useDispatch();

    const { docente: doc, ambientefisico, sem, horario } = useSelector((state) => state);
    
    const { obtener_docente } = doc;

    let teacher = {};
    obtener_docente != null ? ( teacher = obtener_docente ): (
        <Navigate to="/admin/horarios" />
    )

    const { obtener_ambiente } = ambientefisico;

    let amb = {};
    obtener_ambiente != null ? ( amb = obtener_ambiente ): (
        <Navigate to="/admin/horarios" />
    )

    const { obtener_semestre } = sem;

    let semes = {};
    obtener_semestre != null ? ( semes = obtener_semestre ): (
        <Navigate to="/admin/horarios" />
    )

    const { register_horario } = horario;
    console.log(register_horario);

    const { nombre, ap_paterno, ap_materno, disponibilidad_tiempo: disponibilidad_tiempoDoc } = teacher;
    const { ambiente: a, piso: p, disponibilidad_tiempo: disponibilidad_tiempoAmb } = amb;
    const { semestre: s, grupo: g, disponibilidad_tiempo: disponibilidad_tiempoSem } = semes;

    console.log(disponibilidad_tiempoDoc);
    console.log(disponibilidad_tiempoAmb);
    console.log(disponibilidad_tiempoSem);

    const [dispo_tiempodoc, setdispo_tiempoDoc] = useState(false);
    const [dispo_tiempoamb, setdispo_tiempoAmb] = useState(false);
    const [dispo_tiemposem, setdispo_tiempoSem] = useState(false);

    const openModal = (dh)=>{
        console.log(dh);
        if (disponibilidad_tiempoDoc) {
            disponibilidad_tiempoDoc.forEach(item => {
                if (item === dh) {
                    console.log(item);
                    console.log(dh);
                    setdispo_tiempoDoc( true );
                }
            });
        }
        else {
            <Navigate to="/admin/horarios" />
        }
        if (disponibilidad_tiempoAmb) {
            disponibilidad_tiempoAmb.forEach(item => {
                if (item === dh) {
                    setdispo_tiempoAmb( true );
                }
            });
        }
        else {
            <Navigate to="/admin/horarios" />
        }
        if (disponibilidad_tiempoSem) {
            disponibilidad_tiempoSem.forEach(item => {
                if (item === dh) {
                    setdispo_tiempoSem( true );
                }
            });
        }
        else {
            <Navigate to="/admin/horarios" />
        }
        console.log(dispo_tiempodoc + ' ' + dispo_tiempoamb + ' ' + dispo_tiemposem);
        if (dispo_tiempodoc === true && dispo_tiempoamb === true && dispo_tiemposem === true) {
            setInsert(true);
        }
        else {
            console.log(`no es posible programar el horario porque el docente esta ocupado o el ambiente o el semestre en el dia y hora: ${dh}`);
            setInsert(false);
        }
    };

    const [ insert, setInsert ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        semestre:'',
        grupo:'',
        dia:'',
        materia: '',
        docente: '',
        ambiente: '',
        piso: '',
        disponibilidad_tiempo1: "",
        disponibilidad_tiempo2: "",
        disponibilidad_tiempo3: "",
        disponibilidad_tiempo4: "",
        disponibilidad_tiempo5: "",
        disponibilidad_tiempo6: "",
        disponibilidad_tiempo7: "",
        disponibilidad_tiempo8: "",
        disponibilidad_tiempo9: "",
        disponibilidad_tiempo10: "",
        disponibilidad_tiempo11: "",
        disponibilidad_tiempo12: "",
        disponibilidad_tiempo13: "",
        disponibilidad_tiempo14: "",
        disponibilidad_tiempo15: "",
        disponibilidad_tiempo16: "",
        disponibilidad_tiempo17: "",
        disponibilidad_tiempo18: "",
        disponibilidad_tiempo19: "",
        disponibilidad_tiempo20: ""
    });

    const { semestre, grupo, dia, materia, docente, ambiente, piso, 
        disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
        disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
        disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20 } = datoselect;

    const handlerChange = ( e ) => {
        const {name, value} = e.target;
        setDatoselect((prevState)=>({
            ...prevState,
            [ name ] : value
        }));
    };
    console.log(datoselect);

    const handlerInsertar = (datos) => {
        const { semestre, grupo, dia, materia, docente, ambiente, piso, 
            disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
            disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
            disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
            disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
        } = datos;

        const array = [];
        const disponibilidad_tiempo = [ ...array, 
            disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
            disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
            disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
            disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20 ];

        dispatch(registerHorario({ semestre, grupo, disponibilidad_tiempo, dia, materia, docente, ambiente, piso }));

        if ( register_horario != null || register_horario == null ) {
            setInsert(false);
            setdispo_tiempoDoc( false );
            setdispo_tiempoAmb( false );
            setdispo_tiempoSem( false );
        }
    };

    useEffect(() => {
        if (insert === false) {
            setdispo_tiempoDoc( false );
            setdispo_tiempoAmb( false );
            setdispo_tiempoSem( false );
        }
    }, [insert]);

    const diahora = {
        lunes: "Lunes",
        martes: "Martes",
        miercoles: "Miercoles",
        jueves: "Jueves",
        viernes: "Viernes",
        primera_hora: "7:45-10:00",
        segunda_hora: "10:00-12:15",
        tercera_hora: "14:00-16:45",
        cuarta_hora: "16:45-18:30"
    };

    const { lunes, martes, miercoles, jueves, viernes, primera_hora, segunda_hora, tercera_hora, cuarta_hora } = diahora;

    const lunesph = lunes + ': ' + primera_hora;
    const lunessh = lunes + ': ' + segunda_hora;
    const lunesth = lunes + ': ' + tercera_hora;
    const lunesch = lunes + ': ' + cuarta_hora;

    const martesph = martes + ': ' + primera_hora;
    const martessh = martes + ': ' + segunda_hora;
    const martesth = martes + ': ' + tercera_hora;
    const martesch = martes + ': ' + cuarta_hora;

    const miercolesph = miercoles + ': ' + primera_hora;
    const miercolessh = miercoles + ': ' + segunda_hora;
    const miercolesth = miercoles + ': ' + tercera_hora;
    const miercolesch = miercoles + ': ' + cuarta_hora;

    const juevesph = jueves + ': ' + primera_hora;
    const juevessh = jueves + ': ' + segunda_hora;
    const juevesth = jueves + ': ' + tercera_hora;
    const juevesch = jueves + ': ' + cuarta_hora;
    
    const viernesph = viernes + ': ' + primera_hora;
    const viernessh = viernes + ': ' + segunda_hora;
    const viernesth = viernes + ': ' + tercera_hora;
    const viernesch = viernes + ': ' + cuarta_hora;

    return (
        <>
            <div className="formatohorario">
                
                <button className="btn-a" >HORARIO</button>
                <button className="btn-a" >{lunes}</button>
                <button className="btn-a"  >{martes}</button>
                <button className="btn-a" >{miercoles}</button>
                <button className="btn-a" >{jueves}</button>
                <button className="btn-a" >{viernes}</button>
                
                <button className="btn-a" >{primera_hora}</button>
                <button className="btn-a"  onClick={() => {
                    openModal(lunesph);
                }} >
                    {lunesph}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(martesph);
                }} >
                    {martesph}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(miercolesph);
                }} >
                    {miercolesph}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(juevesph);
                }} >
                    {juevesph}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(viernesph);
                }} >
                    {viernesph}
                </button> 
                
                <button className="btn-a" >{segunda_hora}</button>
                <button className="btn-a"  onClick={() => {
                    openModal(lunessh);
                }} >
                    {lunessh}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(martessh);
                }} >
                    {martessh}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(miercolessh);
                }} >
                    {miercolessh}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(juevessh);
                }} >
                    {juevessh}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(viernessh);
                }} >
                    {viernessh}
                </button> 
                
                <button className="btn-a" >{tercera_hora}</button>
                <button className="btn-a"  onClick={() => {
                    openModal(lunesth);
                }} >
                    {lunesth}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(martesth);
                }} >
                    {martesth}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(miercolesth);
                }} >
                    {miercolesth}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(juevesth);
                }} >
                    {juevesth}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(viernesth);
                }} >
                    {viernesth}
                </button> 
                
                <button className="btn-a" >{cuarta_hora}</button>
                <button className="btn-a"  onClick={() => {
                    openModal(lunesch);
                }} >
                    {lunesch}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(martesch);
                }} >
                    {martesch}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(miercolesch);
                }} >
                    {miercolesch}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(juevesch);
                }} >
                    {juevesch}
                </button> 
                <button className="btn-a"  onClick={() => {
                    openModal(viernesch);
                }} >
                    {viernesch}
                </button> 
            </div>

            <Modal isOpen = {insert}>
                <ModalHeader>
                    INSERTAR
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>SEMESTRE:</Label>
                        <Input className="form-control" type="text" name="semestre"
                            value = {semestre} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <div className="docenteambsem"><BsFillExclamationTriangleFill/>{' '}{'El semestre es:'}{' '}{s}</div>
                    <FormGroup>
                        <Label>GRUPO:</Label>
                        <Input className="form-control" type="text" name="grupo"
                            value = {grupo} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <div className="docenteambsem"><BsFillExclamationTriangleFill/>{' '}{'El grupo es:'}{' '}{g}</div>
                    <FormGroup>
                        <Label>DIA:</Label>
                        <Input className="form-control" type="text" name="dia"
                            value = {dia} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>MATERIA:</Label>
                        <Input className="form-control" type="text" name="materia"
                            value = {materia} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>DOCENTE:</Label>
                        <Input className="form-control" type="text" name="docente"
                            value = {docente} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <div className="docenteambsem"><BsFillExclamationTriangleFill/>{' '}{'El o la docente es:'}{' '}{nombre}{' '}{ap_paterno}{' '}{ap_materno}</div>
                    <FormGroup>
                        <Label>AMBIENTE:</Label>
                        <Input className="form-control" type="text" name="ambiente"
                            value = {ambiente} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <div className="docenteambsem"><BsFillExclamationTriangleFill/>{' '}{'El ambiente es:'}{' '}{a}</div>
                    <FormGroup>
                        <Label>PISO:</Label>
                        <Input className="form-control" type="text" name="piso"
                            value = {piso} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <div className="docenteambsem"><BsFillExclamationTriangleFill/>{' '}{'El piso es:'}{' '}{p}</div>
                    <FormGroup>
                        <Label>DISPONIBILIDAD DE TIEMPO OCUPADA:</Label>
                        <table className=" table-bordered thead-dark">
                            <thead>
                                <tr>
                                    <th>LUNES ( ejemplo: Lunes: 07:45-10:00 )</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr> 
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo1"
                                            value = {disponibilidad_tiempo1}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo2"
                                            value = {disponibilidad_tiempo2} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo3"
                                            value = {disponibilidad_tiempo3} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo4"
                                            value = {disponibilidad_tiempo4}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-bordered thead-dark">
                            <thead>
                                <tr>
                                    <th>MARTES ( ejemplo: Martes: 07:45-10:00 )</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr> 
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo5"
                                            value = {disponibilidad_tiempo5}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo6"
                                            value = {disponibilidad_tiempo6} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo7"
                                            value = {disponibilidad_tiempo7} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo8"
                                            value = {disponibilidad_tiempo8}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-bordered thead-dark">
                            <thead>
                                <tr>
                                    <th>MIERCOLES ( ejemplo: Miercoles: 07:45-10:00 )</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr> 
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo9"
                                            value = {disponibilidad_tiempo9}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo10"
                                            value = {disponibilidad_tiempo10} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo11"
                                            value = {disponibilidad_tiempo11} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo12"
                                            value = {disponibilidad_tiempo12}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-bordered thead-dark">
                            <thead>
                                <tr>
                                    <th>JUEVES ( ejemplo: Jueves: 07:45-10:00 )</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr> 
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo13"
                                            value = {disponibilidad_tiempo13}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo14"
                                            value = {disponibilidad_tiempo14} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo15"
                                            value = {disponibilidad_tiempo15} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo16"
                                            value = {disponibilidad_tiempo16}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className=" table-bordered thead-dark">
                            <thead>
                                <tr>
                                    <th>VIERNES ( ejemplo: Viernes: 07:45-10:00 )</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr> 
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo17"
                                            value = {disponibilidad_tiempo17}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo18"
                                            value = {disponibilidad_tiempo18} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo19"
                                            value = {disponibilidad_tiempo19} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="text" name="disponibilidad_tiempo20"
                                            value = {disponibilidad_tiempo20}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                            handlerInsertar(datoselect);
                        }}
                    >
                        INSERTAR
                    </Button>
                    <Button color="secondary" onClick={() => setInsert(false)}>CANCELAR</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
