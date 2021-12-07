import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerAmbiente } from '../../../actions/registerAmbiente';
import "./ambientes.css";

export const RegisterAmbienteComponent = () => {
    const dispatch = useDispatch();

    const { ambientefisico } = useSelector((state) => state);
    const { register_ambiente } = ambientefisico;
    console.log(register_ambiente);

    const [ insert, setInsert ] = useState( false );
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
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20 } = datoselect;

    const handlerChange = ( e ) => {
        const {name, value} = e.target;
        setDatoselect((prevState)=>({
            ...prevState,
            [ name ] : value
        }));
    };
    console.log(datoselect);

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
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20 ];

    const handlerInsertar = () => {
        dispatch(registerAmbiente({ ambiente, piso, capacidad, modalidad, link_clase, disponibilidad_tiempo }));
        if ( register_ambiente != null ) {
            setInsert(false);
        }
    };

    const openModal=()=>{
        setInsert(true);
    };

    return (
        <>
            <button type="button" onClick={()=>openModal()}>INSERTAR</button>

            <Modal isOpen = {insert}>
                <ModalHeader>
                    INSERTAR
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>AMBIENTE:</Label>
                        <Input className="form-control" type="text" name="ambiente"
                            value = {ambiente}
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
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo1"
                                            value = {disponibilidad_tiempo1}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo2"
                                            value = {disponibilidad_tiempo2} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo3"
                                            value = {disponibilidad_tiempo3} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo4"
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
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo5"
                                            value = {disponibilidad_tiempo5}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo6"
                                            value = {disponibilidad_tiempo6} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo7"
                                            value = {disponibilidad_tiempo7} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo8"
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
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo9"
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
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo11"
                                            value = {disponibilidad_tiempo11} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo12"
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
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo13"
                                            value = {disponibilidad_tiempo13}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo14"
                                            value = {disponibilidad_tiempo14} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo15"
                                            value = {disponibilidad_tiempo15} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo16"
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
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo17"
                                            value = {disponibilidad_tiempo17}
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo18"
                                            value = {disponibilidad_tiempo18} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo19"
                                            value = {disponibilidad_tiempo19} 
                                            onChange = {handlerChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Input className="form-control" type="string" name="disponibilidad_tiempo20"
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
                            handlerInsertar();
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
