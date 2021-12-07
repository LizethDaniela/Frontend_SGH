import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMateria, editMateria } from '../../../actions/registerMateria';

export const MateriaItem = ({ _id, subject, sigla, semestre, horas_semana, otro }) => {
    const dispatch = useDispatch();
    const { materia } = useSelector(state => state);
    const { edit_materia, delete_materia } = materia;
    console.log(edit_materia);
    console.log(delete_materia);

    const [ update, setUpdate ] = useState( false );
    const [ delet, setDelet ] = useState( false );
    const [ datoselect, setDatoselect ] = useState({
        subject:'',
        sigla:'',
        semestre:'',
        horas_semana:''
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
        dispatch(editMateria(id, editdata));
        if ( edit_materia != null )
            setUpdate(false);
    };

    const handlerDelete = (id) => {
        console.log(id);
        dispatch(deleteMateria(id));
        if ( delete_materia != null )
            setDelet(false);
    };
    return (
        <>
            <tr> 
                <td>{ subject }</td>
                <td>{ sigla } </td>
                <td>{ semestre }</td>
                <td>{ horas_semana }</td>
                <td>
                    <button className="btn btn-primary" onClick={() => select( otro, 'Editar' )}>EDITAR</button>{'  '}
                    {'  '}
                    <button className="btn btn-danger" onClick={() => select( otro, 'Eliminar' )}>ELIMINAR</button>
                </td>
            </tr>

            <Modal isOpen = {update}>
                <ModalHeader>
                    EDITAR
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>MATERIA:</Label>
                        <Input className="form-control" type="text" name="subject"
                            value = {datoselect.subject} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>SIGLA:</Label>
                        <Input className="form-control" type="text" name="sigla"
                            value = {datoselect.sigla} 
                            onChange = {handlerChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>NIVEL ACADEMICO:</Label>
                        <Input className="form-control" type="text" name="semestre"
                            value = {datoselect.semestre} 
                            onChange = {handlerChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>CARGA HORARIA SEMANAL:</Label>
                        <Input className="form-control" type="number" name="horas_semana"
                            value = {datoselect.horas_semana} 
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
                    {' '}{datoselect.subject} {''}
                    {datoselect.sigla}?
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
