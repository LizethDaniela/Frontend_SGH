import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addMateria } from '../../../actions/registerMateria';
import { Navigate } from 'react-router';

export const MateriaItem = (props) => {
    const dispatch = useDispatch();
    const { docente, materia } = useSelector((state) => state);
    const { add_materiateacher } = materia;
    console.log(add_materiateacher);
    const { obtener_docente } = docente;

    let teacher = {};
    obtener_docente != null ? ( teacher = obtener_docente ): (
        <Navigate to="/admin/asignarmaterias" />
    )
    const { _id, nombre, ap_paterno, ap_materno } = teacher;

    const [ insert, setInsert ] = useState( false );

    const openModal = ()=>{
        setInsert(true);
    };

    const handlerInsert = (id) => {
        console.log(id);
        dispatch(addMateria(_id, id));
        if ( add_materiateacher != null || add_materiateacher == null ) {
            setInsert(false);
        }
    };

    return (
        <>
            <div className="card-body">
                <div className="mb-3">
                    <h4>Semestre { props.semestre }</h4>
                </div>
                { props.subject }
                <button className="btn btn-primary" onClick={() => openModal()}>Asignar Materia</button>{'  '}
            </div>

            <Modal isOpen={insert}>
                <ModalBody>
                    ¿Estas segur@ que quieres añadir a  { nombre } {' '} { ap_paterno } {' '} { ap_materno } {' '} la materia 
                    {' '}{ props.subject } semestre {' '} { props.semestre }?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ () => {
                            handlerInsert(props._id);
                        }}
                    >
                        SI
                    </Button>
                    <Button color="secondary" onClick={() => setInsert( false )}>NO</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
