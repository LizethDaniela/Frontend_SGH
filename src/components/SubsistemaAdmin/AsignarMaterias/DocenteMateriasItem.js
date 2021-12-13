import React from 'react';
import { MateriasItem } from './MateriasItem';

export const DocenteMateriasItem = (props) => {
    return (
        <>
            <tr> 
                <td>{ props.ci }</td>
                <td>{ props.nombre }</td>
                <td>{ props.ap_paterno } </td>
                <td>{ props.ap_materno }</td>
                <td>{ props.cargo }</td>
                <td>
                { props.materias &&
                    props.materias.map( item => {
                        return <MateriasItem key = {item._id} {...item}/>;
                    })
                }
                </td>
            </tr>
        </>
    );
};
