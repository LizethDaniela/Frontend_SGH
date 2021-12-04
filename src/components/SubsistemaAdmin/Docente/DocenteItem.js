import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { deleteDocente, editDocente } from '../../../actions/registerDocente';

export const DocenteItem = ({ _id, ci, nombre, ap_paterno, ap_materno, cargo, email, fecha_nac, telefono, carga_horaria, otro }) => {
    const dispatch = useDispatch();
    const { docente } = useSelector(state => state);
    const { edit_docente, delete_docente } = docente;
    console.log(edit_docente);
    console.log(delete_docente);

    const [update, setUpdate ] = useState( false );
    const [ delet, setDelet ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        _id:"",
        ci: "",
        nombre: "",
        ap_paterno: "",
        ap_materno: "",
        cargo: "",
        email: "",
        fecha_nac: "",
        telefono: "",
        carga_horaria: ""
    });

    const select = ( item, caso )=>{
        setDatoselect( item );
        ( caso === 'Editar' )? setUpdate( true ) : setDelet( true )
    };
    console.log(datoselect);

    const handlerChange = e => {
        const { name, value } = e.target;
        setDatoselect(( prevState ) => ({
            ...prevState,
            [ name ]: value
        }));
    };

    const handlerEdit = (id, editdata) => {
        console.log(editdata);
        dispatch(editDocente(id, editdata));
        if ( edit_docente != null )
            setUpdate(false);
    };

    const handlerDelete = (id) => {
        console.log(id);
        dispatch(deleteDocente(id));
        if ( delete_docente != null )
            setDelet(false);
    };
    return (
        <>
            <tr> 
                <td>{ ci }</td>
                <td>{ nombre }</td>
                <td>{ ap_paterno } </td>
                <td>{ ap_materno }</td>
                <td>{ cargo }</td>
                <td>{ email }</td>
                <td>{ fecha_nac }</td>
                <td>{ telefono }</td>
                <td>{ carga_horaria }</td>
                <td>
                    <button className="btn btn-primary" onClick={()=>select(otro, 'Editar')}>EDITAR</button>{'  '}
                    {'  '}
                    <button className="btn btn-danger" onClick={()=>select(otro, 'Eliminar')}>ELIMINAR</button>
                </td>
            </tr>

            <Modal isOpen={update}>
                <ModalHeader>
                    <h2>EDITAR</h2>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>C.I.:</Label>
                        <Input className="form-control" type="text" name="ci"  
                            value={datoselect.ci}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>NOMBRE:</Label>
                        <Input className="form-control" type="text" name="nombre" 
                            value={datoselect.nombre} 
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>APELLIDO PATERNO:</Label>
                        <Input className="form-control" type="text" name="ap_paterno"  
                            value={datoselect.ap_paterno}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>APELLIDO MATERNO:</Label>
                        <Input className="form-control" type="text" name="ap_materno"  
                            value={datoselect.ap_materno}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>CARGO:</Label>
                        <Input className="form-control" type="text" name="cargo"  
                            value={datoselect.cargo}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>E-MAIL</Label>
                        <Input className="form-control" type="text" name="email"  
                            value={datoselect.email}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>FECHA DE NACIMIENTO:</Label>
                        <Input className="form-control" type="date" name="fecha_nac"  
                            value={datoselect.fecha_nac}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>TELEFONO:</Label>
                        <Input className="form-control" type="number" name="telefono"  
                            value={datoselect.telefono}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>CARGA HORARIA:</Label>
                        <Input className="form-control" type="text" name="carga_horaria"  
                            value={datoselect.carga_horaria}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={ () => {
                            handlerEdit(_id, datoselect);
                        }}
                    >
                        EDITAR
                    </Button>
                    <Button color="secondary" onClick={() => setUpdate(false)}>CANCELAR</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={delet}>
                <ModalBody>
                    ¿Estas segur@ que quieres eliminar a 
                    {' '}{ datoselect.nombre}{' '}
                    {datoselect.ap_paterno}{' '}{datoselect.ap_materno}?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ () => {
                            handlerDelete(_id);
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
