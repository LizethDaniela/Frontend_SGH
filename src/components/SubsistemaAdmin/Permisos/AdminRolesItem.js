import React from 'react';
import { RolItem } from './RolItem';

export const AdminRolesItem = (props) => {
    return (
        <>
            <tr> 
                <td>{ props.ci }</td>
                <td>{ props.nombre }</td>
                <td>{ props.ap_paterno } </td>
                <td>{ props.ap_materno }</td>
                <td>{ props.cargo }</td>
                <td>
                { props.roles &&
                    props.roles.map( item => {
                        return <RolItem key = {item._id} {...item}/>;
                    })
                }
                </td>
                {/* {
                    props.roles.map((item) => (
                        <td key = {item._id}>
                            { item.name } <br/>
                            { item.method } <br/>
                            { item.url } <br/>
                        </td>
                    ))
                } */}
            </tr>
        </>
    );
};
