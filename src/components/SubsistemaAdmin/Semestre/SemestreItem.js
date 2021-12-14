import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSemestre, editSemestre } from '../../../actions/registerSemestre';
import { FaPencilAlt,FaTrashAlt } from "react-icons/fa";

export const SemestreItem = ( props ) => {
    const dispatch = useDispatch();
    const { sem } = useSelector(state => state);
    const { edit_semestre, delete_semestre } = sem;
    console.log(edit_semestre);
    console.log(delete_semestre);

    const [ update, setUpdate ] = useState( false );
    const [ delet, setDelet ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        semestre: "",
        grupo: "",
        gestion: "",
        nivel_academico: "",
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

    const { semestre, grupo, gestion, nivel_academico, 
        disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
        disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
        disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
    } = datoselect;

    const select = ( item, caso )=>{
        const { _id, semestre, grupo, gestion, nivel_academico, disponibilidad_tiempo } = item;
        const [ disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
            disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
            disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
            disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
        ] = disponibilidad_tiempo;
        setDatoselect({ _id, semestre, grupo, gestion, nivel_academico, disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
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

    const array = [];
    const disponibilidad_tiempo = [ ...array, 
        disponibilidad_tiempo1, disponibilidad_tiempo2, disponibilidad_tiempo3, disponibilidad_tiempo4, disponibilidad_tiempo5, 
        disponibilidad_tiempo6, disponibilidad_tiempo7, disponibilidad_tiempo8, disponibilidad_tiempo9, disponibilidad_tiempo10, 
        disponibilidad_tiempo11, disponibilidad_tiempo12, disponibilidad_tiempo13, disponibilidad_tiempo14, disponibilidad_tiempo15, 
        disponibilidad_tiempo16, disponibilidad_tiempo17, disponibilidad_tiempo18, disponibilidad_tiempo19, disponibilidad_tiempo20
    ];

    const handlerEdit = (id) => {
        dispatch(editSemestre(id, { semestre, grupo, gestion, nivel_academico, disponibilidad_tiempo }));
        if ( edit_semestre != null )
            setUpdate(false);
    };

    const handlerDelete = (id) => {
        console.log(id);
        dispatch(deleteSemestre(id));
        if ( delete_semestre != null )
            setDelet(false);
    };
    return (
        <>
            <tr> 
                <td>{ props.semestre }</td>
                <td>{ props.grupo } </td>
                <td>{ props.gestion }</td>
                <td>{ props.nivel_academico }</td>
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
                    <button className="btn btn-danger" onClick={() => select( props.otro, 'Eliminar' )}><FaTrashAlt/> ELIMINAR</button>
                </td>
            </tr>

            <Modal isOpen = {update}>
                <ModalHeader>
                    EDITAR
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>SEMESTRE:</Label>
                        <Input className="form-control" type="text" name="semestre"
                            value = {datoselect.semestre}
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>GRUPO:</Label>
                        <Input className="form-control" type="text" name="grupo"
                            value = {grupo}
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>GESTION:</Label>
                        <Input className="form-control" type="text" name="gestion"
                            value = {gestion}
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>NIVEL ACADEMICO:</Label>
                        <Input className="form-control" type="number" name="nivel_academico"
                            value = {nivel_academico}
                            onChange = {handlerChange}
                        />
                    </FormGroup>
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
                    {' '}{datoselect.semestre} grupo {' '}
                    {datoselect.grupo}?
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
