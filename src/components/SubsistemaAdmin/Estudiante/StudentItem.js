import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { deleteStudent, editStudent } from "../../../actions/registerEstudent";
import { FaUserEdit ,FaTrashAlt} from "react-icons/fa";

export const StudentItem = ({ _id, ci, ru, nombre, ap_paterno, ap_materno, cargo, semestre, email, fecha_nac, telefono, otro }) => {
    const dispatch = useDispatch();
    const { student } = useSelector(state => state);
    const { edit_student, delete_student } = student;
    console.log(delete_student);

    const [update, setUpdate ] = useState( false );
    const [ delet, setDelet ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        _id:"",
        ci: "",
        ru: "",
        nombre: "",
        ap_paterno: "",
        ap_materno: "",
        cargo: "",
        semestre: "",
        email: "",
        fecha_nac: "",
        telefono: "",
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
        dispatch(editStudent(id, editdata));
        if ( edit_student != null )
            setUpdate(false);
    };

    const handlerDelete = (id) => {
        console.log(id);
        dispatch(deleteStudent(id));
        if ( delete_student != null )
            setDelet(false);
    };
    return (
        <>
            <tr> 
                <td>{ ci }</td>
                <td>{ ru }</td>
                <td>{ nombre }</td>
                <td>{ ap_paterno } </td>
                <td>{ ap_materno }</td>
                <td>{ cargo }</td>
                <td>{ semestre }</td>
                <td>{ email }</td>
                <td>{ fecha_nac }</td>
                <td>{ telefono }</td>
                <td>
                    <button className="btn btn-primary" onClick={()=>select(otro, 'Editar')}><FaUserEdit/> EDITAR</button>{'  '}
                    {'  '}
                    <button className="btn btn-danger" onClick={()=>select(otro, 'Eliminar')}><FaTrashAlt/> ELIMINAR</button>
                </td>
            </tr>

            <Modal isOpen={update}>
                <ModalHeader>
                    EDITAR
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
                        <Label>R.U.:</Label>
                        <Input className="form-control" type="number" name="ru"  
                            value={datoselect.ru}
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
                        <Label>SEMESTRE:</Label>
                        <Input className="form-control" type="text" name="semestre"  
                            value={datoselect.semestre}
                            onChange={handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>E-MAIL</Label>
                        <Input className="form-control" type="email" name="email"  
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
