import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { obtenerAdministrador } from '../../../actions/auth';

export const PermisoAdminItem = (props) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => state);
    const { obtener_admin } = auth;
    console.log(obtener_admin);

    if (obtener_admin != null) {
        props.admin(obtener_admin);
    }

    const [ select, setSelect ] = useState( false );

    const openModal = ()=>{
        setSelect(true);
    };

    const handlerBuscar = (id) => {
        console.log(id);
        dispatch(obtenerAdministrador(id));
        if ( obtener_admin != null || obtener_admin == null ) {
            setSelect(false);
        }
    };

    return (
        <>
            <tr> 
                <td>{ props.nombreAdmin } { props.apaternoAdmin } { props.amaternoAdmin }</td>
                <td>
                    <button className="btn btn-primary" onClick={() => openModal()}>SELECCIONAR</button>{'  '}
                </td>
            </tr>

            <Modal isOpen={select}>
                <ModalBody>
                    ¿Estas segur@ que quieres seleccionar a 
                    {' '}{ props.nombreAdmin } {' '} { props.apaternoAdmin } {' '} { props.amaternoAdmin } para añadirle roles?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ () => {
                            handlerBuscar(props.idAdmin);
                        }}
                    >
                        SI
                    </Button>
                    <Button color="secondary" onClick={() => setSelect( false )}>NO</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
