import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAmbiente, editAmbiente } from '../../../actions/registerAmbiente';
import { FaPencilAlt,FaTrashAlt } from "react-icons/fa";
import "./ambientes.css";

export const AmbienteItem = ( props ) => {
    const dispatch = useDispatch();
    const { ambientefisico } = useSelector(state => state);
    const { edit_ambiente, delete_ambiente } = ambientefisico;
    console.log(edit_ambiente);
    console.log(delete_ambiente);

    const [ update, setUpdate ] = useState( false );
    const [ delet, setDelet ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        ambiente: "",
        piso: "",
        capacidad: "",
        modalidad: "",
        link_clase: "",
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

    const { ambiente, piso, capacidad, modalidad, link_clase, 
        disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
        disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
        disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
    } = datoselect;

    const select = ( item, caso )=>{
        const { _id, ambiente, piso, capacidad, modalidad, link_clase, disponibilidad_tiempo } = item;
        const [ disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
            disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
            disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
            disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
        ] = disponibilidad_tiempo;
        setDatoselect({ _id, ambiente, piso, capacidad, modalidad, link_clase, disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
            disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
            disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
            disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
        });
        
        ( caso === 'Editar' )? setUpdate( true ) : setDelet( true )
    };
    console.log(datoselect);

    const handlerChange = ( e ) => {
        const { name, value } = e.target;
        setDatoselect(( prevState ) => ({
            ...prevState,
            [ name ]: value
        }));
    };

    //ERROR AMBIENTE
    const [ error, setError ] = useState({
        msnambiente: ""
    });

    const onblurAmbiente = () => {
        setError( { ...error , msnambiente: "El ambiente debe ser unico, no debe haber ambientes duplicados"});
    };

    const { msnambiente } = error;

    //ERROR AMBIENTE

    //MODALIDAD LINK CLASE
    const [ link, setLink] = useState({
        msjlink: ""
    });
    const onblurlinkClase = () => {
        setLink({ ...link, msjlink: "Solo debe colocar el link de la clase cuando la modalidad de la clase es virtual" });
    };
    const { msjlink } = link;
    //MODALIDAD LINK CLASE

    const array = [];
    const disponibilidad_tiempo = [ ...array, 
        disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
        disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
        disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
    ];

    const handlerEdit = (id) => {
        dispatch(editAmbiente(id, { ambiente, piso, capacidad, modalidad, link_clase, disponibilidad_tiempo }));
        if ( edit_ambiente != null )
            setUpdate(false);
    };

    const handlerDelete = (id) => {
        console.log(id);
        dispatch(deleteAmbiente(id));
        if ( delete_ambiente != null )
            setDelet(false);
    };
    return (
        <>
            <tr> 
                <td>{ props.ambiente }</td>
                <td>{ props.piso } </td>
                <td>{ props.capacidad }</td>
                <td>{ props.modalidad }</td>
                <td>{ props.link_clase }</td>
                <td>
                    { props.disponibilidad_tiempo[0] } <br/>
                    { props.disponibilidad_tiempo[1] } <br/>
                    { props.disponibilidad_tiempo[2] } <br/>
                    { props.disponibilidad_tiempo[3] } <br/>
                </td>
                <td>
                    { props.disponibilidad_tiempo[4] } <br/>
                    { props.disponibilidad_tiempo[5] } <br/>
                    { props.disponibilidad_tiempo[6] } <br/>
                    { props.disponibilidad_tiempo[7] } <br/>
                </td>
                <td>
                    { props.disponibilidad_tiempo[8] } <br/>
                    { props.disponibilidad_tiempo[9] } <br/>
                    { props.disponibilidad_tiempo[10] } <br/>
                    { props.disponibilidad_tiempo[11] } <br/>
                </td>
                <td>
                    { props.disponibilidad_tiempo[12] } <br/>
                    { props.disponibilidad_tiempo[13] } <br/>
                    { props.disponibilidad_tiempo[14] } <br/>
                    { props.disponibilidad_tiempo[15] } <br/>
                </td>
                <td>
                    { props.disponibilidad_tiempo[16] } <br/>
                    { props.disponibilidad_tiempo[17] } <br/>
                    { props.disponibilidad_tiempo[18] } <br/>
                    { props.disponibilidad_tiempo[19] } <br/>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={() => select( props.otro, 'Editar' )}><FaPencilAlt/> EDITAR</button>{'  '}
                    {'  '}
                    <button className="btn btn-danger" onClick={() => select( props.otro, 'Eliminar' )}><FaTrashAlt /> ELIMINAR</button>
                </td>
            </tr>

            <Modal isOpen = {update}>
                <ModalHeader>
                    EDITAR
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>AMBIENTE:</Label>
                        <Input className="form-control" type="text" name="ambiente"
                            value = {datoselect.ambiente}
                            onChange = {handlerChange}
                            onBlur = {onblurAmbiente}
                        />
                    </FormGroup>
                    <div className="errorambiente">{msnambiente}</div>
                    <FormGroup>
                        <Label>PISO:</Label>
                        <Input className="form-control" type="text" name="piso"
                            value = {piso}
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>CAPACIDAD DE PERSONAS:</Label>
                        <Input className="form-control" type="number" name="capacidad"
                            value = {capacidad}
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>MODALIDAD DE CLASE:</Label>
                        <Input className="form-control" type="text" name="modalidad"
                            value = {modalidad}
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>LINK DE LA CLASE:</Label>
                        <Input className="form-control" type="text" name="link_clase"
                            value = {link_clase}
                            onChange = {handlerChange}
                            onBlur = {onblurlinkClase}
                        />
                    </FormGroup>
                    <div className="msjlink">{msjlink}</div>
                    <FormGroup>
                        <Label>DISPONIBILIDAD DE TIEMPO:</Label>
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
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo10"
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
                            handlerEdit(props._id);
                        }}
                    >
                        EDITAR
                    </Button>
                    <Button color="secondary" onClick={() => setUpdate( false )}>CANCELAR</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={delet}>
                <ModalBody>
                    ¿Estas segur@ que quieres eliminar el
                    {' '}{datoselect.ambiente} piso {' '}
                    {datoselect.piso}?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => {
                            handlerDelete(props._id)
                        }}
                    >
                        SI
                    </Button>
                    <Button color="secondary" onClick={() => setDelet(false)}>NO</Button>
                </ModalFooter>
            </Modal>

        </>
    );
};
