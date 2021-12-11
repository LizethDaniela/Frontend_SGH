import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addRol } from '../../../actions/registerRol';
import { Navigate } from 'react-router';

export const PermisoRolItem = (props) => {
    const dispatch = useDispatch();
    const { auth, rol } = useSelector((state) => state);
    const { add_roladmin } = rol;
    console.log(add_roladmin);
    const { obtener_admin } = auth;

    let admin = {};
    obtener_admin != null ? ( admin = obtener_admin ): (
        <Navigate to="/admin/permisos" />
    )
    const { _id, nombre, ap_paterno, ap_materno } = admin;

    const [ insert, setInsert ] = useState( false );

    const openModal = ()=>{
        setInsert(true);
    };

    const handlerInsert = (id) => {
        console.log(id);
        dispatch(addRol(_id, id));
        if ( add_roladmin != null || add_roladmin == null ) {
            setInsert(false);
        }
    };

    return (
        <>
            <tr> 
                <td>{ props.nameRol }</td>
                <td>
                    <button className="btn btn-primary" onClick={() => openModal()}>AÑADIR ROL</button>{'  '}
                </td>
            </tr>

            <Modal isOpen={insert}>
                <ModalBody>
                    ¿Estas segur@ que quieres añadir a  { nombre } {' '} { ap_paterno } {' '} { ap_materno } {' '}el rol 
                    {' '}{ props.nameRol } metodo {' '} { props.methodRol }?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ () => {
                            handlerInsert(props.idRol);
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
