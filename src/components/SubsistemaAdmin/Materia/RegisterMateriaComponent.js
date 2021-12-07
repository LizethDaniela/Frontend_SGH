import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerMateria } from '../../../actions/registerMateria';

export const RegisterMateriaComponent = () => {
    const dispatch = useDispatch();

    const { materia } = useSelector((state) => state);
    const { register_materia } = materia;
    console.log(register_materia);

    const [ insert, setInsert ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        subject:'',
        sigla:'',
        semestre:'',
        horas_semana:''
    });

    const { subject, sigla, semestre, horas_semana } = datoselect;

    const handlerChange = ( e ) => {
        const {name, value} = e.target;
        setDatoselect((prevState)=>({
            ...prevState,
            [ name ] : value
        }));
    };
    console.log(datoselect);

    const handlerInsertar = () => {
        dispatch(registerMateria({ subject, sigla, semestre, horas_semana }));
        if ( register_materia != null ) {
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
                        <Label>MATERIA:</Label>
                        <Input className="form-control" type="text" name="subject"
                            value = {subject} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>SIGLA:</Label>
                        <Input className="form-control" type="text" name="sigla"
                            value = {sigla} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>NIVEL ACADEMICO:</Label>
                        <Input className="form-control" type="text" name="semestre"
                            value = {semestre} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>CARGA HORARIA SEMANAL:</Label>
                        <Input className="form-control" type="number" name="horas_semana"
                            value = {horas_semana} 
                            onChange = {handlerChange}/>
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
