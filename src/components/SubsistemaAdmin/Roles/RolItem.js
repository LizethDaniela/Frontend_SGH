import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRol, editRol } from '../../../actions/registerRol';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

export const RolItem = ({ _id, name, method, url, otro }) => {
    const dispatch = useDispatch();
    const { rol } = useSelector(state => state);
    const { edit_rol, delete_rol } = rol;
    console.log(edit_rol);
    console.log(delete_rol);

    const [ update, setUpdate ] = useState( false );
    const [ delet, setDelet ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        name: "",
        method: "",
        url: ""
    });

    const select = ( item, caso )=>{
        setDatoselect( item );
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

    const handlerEdit = (id, editdata) => {
        console.log(editdata);
        dispatch(editRol(id, editdata));
        if ( edit_rol != null )
            setUpdate(false);
    };

    const handlerDelete = (id) => {
        console.log(id);
        dispatch(deleteRol(id));
        if ( delete_rol != null )
            setDelet(false);
    };
    return (
        <>
            <tr>
                <td>{ name }</td>
                <td>{ method } </td>
                <td>{ url }</td>
                <td>
                    <button className="btn btn-primary" onClick={() => select( otro, 'Editar' )}><FaPencilAlt/>EDITAR</button>{'  '}
                    {'  '}
                    <button className="btn btn-danger" onClick={() => select( otro, 'Eliminar' )}><FaTrashAlt/>ELIMINAR</button>
                </td>
            </tr>

            <Modal isOpen = {update}>
                <ModalHeader>
                    EDITAR
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>ROL:</Label>
                        <Input className="form-control" type="text" name="name"
                            value = {datoselect.name} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>METODO:</Label>
                        <Input className="form-control" type="text" name="method"
                            value = {datoselect.method} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>URL:</Label>
                        <Input className="form-control" type="text" name="url"
                            value = {datoselect.url} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                            handlerEdit(_id, datoselect);
                        }}
                    >
                        EDITAR
                    </Button>
                    <Button color="secondary" onClick={() => setUpdate( false )}>CANCELAR</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={delet}>
                <ModalBody>
                    ¿Estas segur@ que quieres eliminar
                    {' '}{datoselect.name} {' '} metodo {' '}
                    {datoselect.method}?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ () => {
                            handlerDelete(_id);
                        }}
                    >
                        SI
                    </Button>
                    <Button color="secondary" onClick={() => setDelet( false )}>NO</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
