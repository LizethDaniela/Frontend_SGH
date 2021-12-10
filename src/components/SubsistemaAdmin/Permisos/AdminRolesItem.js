import React from 'react';

export const AdminRolesItem = (props) => {
    return (
        <>
            <tr> 
                <td>{ props.ci }</td>
                <td>{ props.nombre }</td>
                <td>{ props.ap_paterno } </td>
                <td>{ props.ap_materno }</td>
                <td>{ props.cargo }</td>
                {
                    props.roles.map((item) => (
                        <td key = {item._id}>
                            { item.name } <br/>
                            { item.method } <br/>
                            { item.url } <br/>
                        </td>
                    ))
                }
            </tr>
        </>
    );
};
