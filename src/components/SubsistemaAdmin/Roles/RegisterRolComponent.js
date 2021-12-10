import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerRol } from '../../../actions/registerRol';

export const RegisterRolComponent = () => {
    const dispatch = useDispatch();

    const { rol } = useSelector((state) => state);
    const { register_rol } = rol;
    console.log(register_rol);

    const [ insert, setInsert ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        name: "",
        method: "",
        url: ""
    });

    const { name, method, url } = datoselect;

    const handlerChange = ( e ) => {
        const {name, value} = e.target;
        setDatoselect((prevState)=>({
            ...prevState,
            [ name ] : value
        }));
    };
    console.log(datoselect);

    const handlerInsertar = (datos) => {
        dispatch(registerRol(datos));
        if ( register_rol != null || register_rol == null ) {
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
                        <Label>ROL:</Label>
                        <Input className="form-control" type="text" name="name"
                            value = {name} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>METODO:</Label>
                        <Input className="form-control" type="text" name="method"
                            value = {method} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>URL:</Label>
                        <Input className="form-control" type="text" name="url"
                            value = {url} 
                            onChange = {handlerChange}/>
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
